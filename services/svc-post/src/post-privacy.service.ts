import {PostRepository} from './post.repository';
import {SVC_POST_NAME} from 'libs/lib-client/src/svc-post/post.const';
import {
  PrivacyClientService,
  ProfileClientService,
  ProfileSubscriptionGroupMembershipClientService,
  ProfileSubscriptionGroupMembershipWire,
} from '@simpd/lib-client';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class PostPrivacyService {
  constructor(
    private readonly postRepo: PostRepository<any, any>,
    private readonly profileClientService: ProfileClientService,
    private readonly privacyClientService: PrivacyClientService,
    private readonly profileSubscriptionGroupMembershipClientService: ProfileSubscriptionGroupMembershipClientService
  ) {}

  async profileCanAccessPost(profileID: number, postID: number): Promise<void> {
    const [matchingProfile, matchingPost, matchingPrivacyPolicy] =
      await Promise.all([
        this.profileClientService.findOne({id: profileID}),
        this.postRepo.findOneOrFail({
          where: {
            id: postID,
          },
        }),
        this.privacyClientService.findOne({
          serviceKey: SVC_POST_NAME,
          resourceID: postID,
        }),
      ]);

    const [profileExists, postExists, privacyPolicyExists] = [
      !!matchingProfile,
      !!matchingPost,
      !!matchingPrivacyPolicy,
    ];

    if (!profileExists || !postExists) {
      throw new NotFoundException();
    }

    if (!privacyPolicyExists) {
      // TODO: Default to profile based blocks
      return;
    }

    const profileMadePost = matchingPost.profileID === profileID;

    if (profileMadePost) {
      return;
    }

    if (matchingPrivacyPolicy!.policy.allowedSubscriptionGroupIDs.length > 0) {
      const allowedSubscriptionGroupIDs =
        matchingPrivacyPolicy!.policy.allowedSubscriptionGroupIDs;

      const subscriptionGroupsProfileIsIn: ProfileSubscriptionGroupMembershipWire[] =
        await this.profileSubscriptionGroupMembershipClientService.findMany({
          profileIDs: [profileID],
          subscriptionGroupIDs: [...allowedSubscriptionGroupIDs],
        });

      const subscriptionGroupIDsProfileIsIn = subscriptionGroupsProfileIsIn.map(
        _ => _.subscriptionGroupID
      );

      const allowedSubscriptionGroupsProfileIsApartOf =
        allowedSubscriptionGroupIDs.filter(_ =>
          subscriptionGroupIDsProfileIsIn.includes(_)
        );

      console.log(
        allowedSubscriptionGroupIDs,
        subscriptionGroupIDsProfileIsIn,
        allowedSubscriptionGroupsProfileIsApartOf
      );

      if (!allowedSubscriptionGroupsProfileIsApartOf?.length) {
        throw new UnauthorizedException();
      }
    }
  }
}
