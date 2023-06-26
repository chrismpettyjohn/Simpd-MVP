import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  ProfileSubscriptionGroupMembershipCreateOneInput,
  ProfileSubscriptionGroupMembershipFindManyInput,
  ProfileSubscriptionGroupMembershipFindOneInput,
  ProfileSubscriptionGroupMembershipWire,
} from './profile-subscription-group-membership-client.types';
import {
  SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_CREATE_ONE,
  SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_DELETE_ONE,
  SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_FIND_MANY,
  SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_FIND_ONE,
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
      SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_CREATE_ONE,
      input
    );
    return await lastValueFrom(newProfileSubscriptionGroupMembership);
  }

  async findOne(
    filter: ProfileSubscriptionGroupMembershipFindOneInput
  ): Promise<ProfileSubscriptionGroupMembershipWire> {
    const matchingProfileSubscriptionGroupMembership$ = this.client.send(
      SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_FIND_ONE,
      filter
    );
    return await lastValueFrom(matchingProfileSubscriptionGroupMembership$);
  }
  async findMany(
    filter: ProfileSubscriptionGroupMembershipFindManyInput
  ): Promise<ProfileSubscriptionGroupMembershipWire[]> {
    const matchingProfileSubscriptionGroupMemberships$ = this.client.send(
      SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_FIND_MANY,
      filter
    );
    return await lastValueFrom(matchingProfileSubscriptionGroupMemberships$);
  }

  async deleteOne(
    filter: ProfileSubscriptionGroupMembershipFindOneInput
  ): Promise<boolean> {
    const newProfileSubscriptionGroupMembership = this.client.send(
      SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_INTERNAL_EVENT_DELETE_ONE,
      filter
    );
    return await lastValueFrom(newProfileSubscriptionGroupMembership);
  }
}
