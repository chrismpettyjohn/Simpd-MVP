import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {ProfileSubscriptionGroupMembershipService} from './profile-subscription-group-membership.service';
import {ProfileSubscriptionGroupMembershipRepository} from './profile-subscription-group-membership.repository';
import {subscriptionGroupMembershipWireToProfileSubscriptionGroupMembershipWire} from './profile-subscription-group-membership.wire';
import {
  INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_CREATE_ONE,
  INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_FIND_MANY,
  INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_FIND_ONE,
  ProfileSubscriptionGroupMembershipCreateOneInput,
  ProfileSubscriptionGroupMembershipFindManyInput,
  ProfileSubscriptionGroupMembershipFindOneInput,
  ProfileSubscriptionGroupMembershipWire,
} from '@simpd/lib-client';

@Controller()
export class ProfileSubscriptionGroupMembershipController {
  constructor(
    private readonly profileSubscriptionGroupMembershipRepo: ProfileSubscriptionGroupMembershipRepository,
    private readonly profileSubscriptionGroupMembershipService: ProfileSubscriptionGroupMembershipService
  ) {}

  @MessagePattern(
    INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_CREATE_ONE
  )
  async subscriptionGroupMembershipCreateOne(
    input: ProfileSubscriptionGroupMembershipCreateOneInput
  ): Promise<ProfileSubscriptionGroupMembershipWire> {
    const newProfileSubscriptionGroupMembership =
      await this.profileSubscriptionGroupMembershipService.create(input);
    return subscriptionGroupMembershipWireToProfileSubscriptionGroupMembershipWire(
      newProfileSubscriptionGroupMembership
    );
  }

  @MessagePattern(
    INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_FIND_ONE
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
    INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_FIND_MANY
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
