import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  ProfileSubcriptionGroupMembershipWasCreatedMessage,
  ProfileSubscriptionGroupMembershipCreateOneInput,
  ProfileSubscriptionGroupMembershipFindManyInput,
  ProfileSubscriptionGroupMembershipFindOneInput,
  ProfileSubscriptionGroupMembershipWire,
} from './profile-subscription-group-membership-client.types';
import {
  INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_CREATE_ONE,
  INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_DELETE_ONE,
  INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_FIND_MANY,
  INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_FIND_ONE,
  INTERNAL_MESSAGE_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_WAS_CREATED,
  SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_NAME,
} from './profile-subscription-group-membership.const';

@Injectable()
export class ProfileSubscriptionGroupMembershipClientService {
  constructor(
    @Inject(SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_NAME)
    private client: ClientProxy
  ) {}

  async createOne(
    input: ProfileSubscriptionGroupMembershipCreateOneInput
  ): Promise<ProfileSubscriptionGroupMembershipWire> {
    const newProfileSubscriptionGroupMembership = this.client.send(
      INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_CREATE_ONE,
      input
    );
    return await lastValueFrom(newProfileSubscriptionGroupMembership);
  }

  async _onCreated(
    input: ProfileSubcriptionGroupMembershipWasCreatedMessage
  ): Promise<void> {
    await this.client.send(
      INTERNAL_MESSAGE_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_WAS_CREATED,
      input
    );
  }

  async findOne(
    filter: ProfileSubscriptionGroupMembershipFindOneInput
  ): Promise<ProfileSubscriptionGroupMembershipWire> {
    const matchingProfileSubscriptionGroupMembership$ = this.client.send(
      INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_FIND_ONE,
      filter
    );
    return await lastValueFrom(matchingProfileSubscriptionGroupMembership$);
  }
  async findMany(
    filter: ProfileSubscriptionGroupMembershipFindManyInput
  ): Promise<ProfileSubscriptionGroupMembershipWire[]> {
    const matchingProfileSubscriptionGroupMemberships$ = this.client.send(
      INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_FIND_MANY,
      filter
    );
    return await lastValueFrom(matchingProfileSubscriptionGroupMemberships$);
  }

  async deleteOne(
    filter: ProfileSubscriptionGroupMembershipFindOneInput
  ): Promise<boolean> {
    const newProfileSubscriptionGroupMembership = this.client.send(
      INTERNAL_EVENT_SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_DELETE_ONE,
      filter
    );
    return await lastValueFrom(newProfileSubscriptionGroupMembership);
  }
}
