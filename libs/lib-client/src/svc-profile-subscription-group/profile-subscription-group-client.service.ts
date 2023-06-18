import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  ProfileSubscriptionGroupCreateOneInput,
  ProfileSubscriptionGroupFindManyInput,
  ProfileSubscriptionGroupFindOneInput,
  ProfileSubscriptionGroupWire,
} from './profile-subscription-group-client.types';
import {
  SVC_PROFILE_SUBSCRIPTION_GROUP_INTERNAL_EVENT_CREATE_ONE,
  SVC_PROFILE_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_MANY,
  SVC_PROFILE_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE,
  SVC_PROFILE_SUBSCRIPTION_GROUP_NAME,
} from './profile-subscription-group.const';

@Injectable()
export class ProfileSubscriptionGroupClientService {
  constructor(
    @Inject(SVC_PROFILE_SUBSCRIPTION_GROUP_NAME) private client: ClientProxy
  ) {}

  async createOne(
    input: ProfileSubscriptionGroupCreateOneInput
  ): Promise<ProfileSubscriptionGroupWire> {
    const newProfileSubscriptionGroup = this.client.send(
      SVC_PROFILE_SUBSCRIPTION_GROUP_INTERNAL_EVENT_CREATE_ONE,
      input
    );
    return await lastValueFrom(newProfileSubscriptionGroup);
  }

  async findOne(
    filter: ProfileSubscriptionGroupFindOneInput
  ): Promise<ProfileSubscriptionGroupWire> {
    const matchingProfileSubscriptionGroup$ = this.client.send(
      SVC_PROFILE_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE,
      filter
    );
    return await lastValueFrom(matchingProfileSubscriptionGroup$);
  }
  async findMany(
    filter: ProfileSubscriptionGroupFindManyInput
  ): Promise<ProfileSubscriptionGroupWire[]> {
    const matchingProfileSubscriptionGroups$ = this.client.send(
      SVC_PROFILE_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_MANY,
      filter
    );
    return await lastValueFrom(matchingProfileSubscriptionGroups$);
  }
}
