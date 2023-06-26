import {PostRepository} from './post.repository';
import {SVC_POST_NAME} from 'libs/lib-client/src/svc-post/post.const';
import {
  PrivacyClientService,
  ProfileClientService,
  SubscriptionGroupClientService,
  SubscriptionGroupWire,
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
    private readonly subscriptionGroupClientService: SubscriptionGroupClientService
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

    if (matchingPrivacyPolicy!.policy.allowedSubscriptionGroupIDs.length > 0) {
      // TODO: Add ability for profiles to join a subscription group
      const subscriptionGroupsProfileIsIn: SubscriptionGroupWire[] = [];
      const profileIsApartOfAllowedSubscriptionGroup =
        !!subscriptionGroupsProfileIsIn.find(_ =>
          matchingPrivacyPolicy?.policy.allowedSubscriptionGroupIDs.includes(
            _.id
          )
        );
      if (!profileIsApartOfAllowedSubscriptionGroup) {
        throw new UnauthorizedException();
      }
    }

    const profileHasAllowedSubscriptionGroup =
      matchingProfile.subscriptionGroupIDs.filter(subGroupID =>
        matchingPrivacyPolicy!.policy.allowedSubscriptionGroupIDs.includes(
          subGroupID
        )
      ).length > 0;

    if (!profileHasAllowedSubscriptionGroup) {
      throw new UnauthorizedException();
    }
  }
}
