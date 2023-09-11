import {Injectable} from '@nestjs/common';
import {ProfileSubscriptionGroupMembershipRepository} from './profile-subscription-group-membership.repository';
import {ProfileSubscriptionGroupMembershipMembershipEntity} from './profile-subscription-group-membership.entity';
import {
  ProfileSubscriptionGroupMembershipClientService,
  ProfileSubscriptionGroupMembershipCreateOneInput,
} from '@simpd/lib-client';

@Injectable()
export class ProfileSubscriptionGroupMembershipService {
  constructor(
    private readonly profileSubscriptionGroupMembershipClientService: ProfileSubscriptionGroupMembershipClientService,
    private readonly profileSubscriptionGroupMembershipRepo: ProfileSubscriptionGroupMembershipRepository
  ) {}

  async create(
    input: ProfileSubscriptionGroupMembershipCreateOneInput
  ): Promise<ProfileSubscriptionGroupMembershipMembershipEntity> {
    const matchingSubscriptionGroup =
      await this.profileSubscriptionGroupMembershipClientService.findOne({
        subscriptionGroupID: input.subscriptionGroupID,
      });
    const matchingProfileSubscriptionGroupMembership =
      await this.profileSubscriptionGroupMembershipRepo.create({
        profileID: input.profileID,
        subscriptionGroupID: input.subscriptionGroupID,
        renewsOn: input.renewsOn,
        autoRenew: input.autoRenew,
      });
    await this.profileSubscriptionGroupMembershipClientService._onCreated({
      subscriberProfileID: input.profileID,
      subscriptionGroupID: input.subscriptionGroupID,
      recipientProfileID: matchingSubscriptionGroup.profileID,
    });
    return matchingProfileSubscriptionGroupMembership;
  }
}
