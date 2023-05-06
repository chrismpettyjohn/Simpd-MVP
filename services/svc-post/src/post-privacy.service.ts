import {PostRepository} from './post.repository';
import {PrivacyClientService, ProfileClientService} from '@simpd/lib-client';
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
    private readonly privacyClientService: PrivacyClientService
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
        this.privacyClientService.findOne({resourceID: postID}),
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

    const profileHasAllowedSubscriptionGroup =
      matchingProfile.subscriptionGroupIDs.filter(subGroupID =>
        matchingPrivacyPolicy.policy.allowedSubscriptionGroupIDs.includes(
          subGroupID
        )
      ).length > 0;

    if (!profileHasAllowedSubscriptionGroup) {
      throw new UnauthorizedException();
    }
  }
}
