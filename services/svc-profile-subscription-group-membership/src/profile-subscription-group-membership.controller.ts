import {In} from 'typeorm';
import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {ProfileSubscriptionGroupMembershipRepository} from './profile-subscription-group-membership.repository';
import {subscriptionGroupMembershipWireToProfileSubscriptionGroupMembershipWire} from './profile-subscription-group-membership.wire';
import {
  ProfileSubscriptionGroupMembershipCreateOneInput,
  ProfileSubscriptionGroupMembershipFindManyInput,
  ProfileSubscriptionGroupMembershipFindOneInput,
  ProfileSubscriptionGroupMembershipWire,
  SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_CREATE_ONE,
  SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_FIND_MANY,
  SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class ProfileSubscriptionGroupMembershipController {
  constructor(
    private readonly profileSubscriptionGroupMembershipRepo: ProfileSubscriptionGroupMembershipRepository
  ) {}

  @MessagePattern(
    SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_CREATE_ONE
  )
  async subscriptionGroupMembershipCreateOne(
    input: ProfileSubscriptionGroupMembershipCreateOneInput
  ): Promise<ProfileSubscriptionGroupMembershipWire> {
    const matchingProfileSubscriptionGroupMembership =
      await this.profileSubscriptionGroupMembershipRepo.create({
        profileID: input.profileID,
        subscriptionGroupID: input.subscriptionGroupID,
        renewsOn: input.renewsOn,
        autoRenew: input.autoRenew,
      });
    return subscriptionGroupMembershipWireToProfileSubscriptionGroupMembershipWire(
      matchingProfileSubscriptionGroupMembership
    );
  }

  @MessagePattern(
    SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_FIND_ONE
  )
  async subscriptionGroupMembershipFindOne(
    filter: ProfileSubscriptionGroupMembershipFindOneInput
  ): Promise<ProfileSubscriptionGroupMembershipWire> {
    const matchingProfileSubscriptionGroupMembership =
      await this.profileSubscriptionGroupMembershipRepo.findOneOrFail({
        where: {
          profileID: filter.profileID,
          subscriptionGroupID: filter.subscriptionGroupID,
        },
      });
    return subscriptionGroupMembershipWireToProfileSubscriptionGroupMembershipWire(
      matchingProfileSubscriptionGroupMembership
    );
  }

  @MessagePattern(
    SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_FIND_MANY
  )
  async subscriptionGroupMembershipFindMany(
    filter: ProfileSubscriptionGroupMembershipFindManyInput
  ): Promise<ProfileSubscriptionGroupMembershipWire[]> {
    const matchingProfileSubscriptionGroupMemberships =
      await this.profileSubscriptionGroupMembershipRepo.find({
        where: {
          // profileID: filter.profileIDs && In(filter.profileIDs),
          // subscriptionGroupID:
          //   filter.subscriptionGroupIDs && In(filter.subscriptionGroupIDs),
        },
      });
    return matchingProfileSubscriptionGroupMemberships.map(
      subscriptionGroupMembershipWireToProfileSubscriptionGroupMembershipWire
    );
  }
}
