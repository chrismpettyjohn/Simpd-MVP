import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  SubscriptionGroupCreateOneInput,
  SubscriptionGroupFindManyInput,
  SubscriptionGroupFindOneInput,
  SubscriptionGroupWire,
} from './subscription-group-client.types';
import {
  SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_CREATE_ONE,
  SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_DELETE_ONE,
  SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_MANY,
  SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE,
  SVC_SUBSCRIPTION_GROUP_NAME,
} from './subscription-group.const';

@Injectable()
export class SubscriptionGroupClientService {
  constructor(
    @Inject(SVC_SUBSCRIPTION_GROUP_NAME) private client: ClientProxy
  ) {}

  async createOne(
    filter: SubscriptionGroupCreateOneInput
  ): Promise<SubscriptionGroupWire> {
    const newSubscriptionGroup = this.client.send(
      SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_CREATE_ONE,
      filter
    );
    return await lastValueFrom(newSubscriptionGroup);
  }

  async findOne(
    filter: SubscriptionGroupFindOneInput
  ): Promise<SubscriptionGroupWire> {
    const matchingSubscriptionGroup$ = this.client.send(
      SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE,
      filter
    );
    return await lastValueFrom(matchingSubscriptionGroup$);
  }

  async findMany(
    input: SubscriptionGroupFindManyInput
  ): Promise<SubscriptionGroupWire[]> {
    const matchingSubscriptionGroup$ = this.client.send(
      SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_MANY,
      input
    );
    return await lastValueFrom(matchingSubscriptionGroup$);
  }
  async deleteOne(filter: SubscriptionGroupFindOneInput): Promise<boolean> {
    const matchingSubscriptionGroup$ = this.client.send(
      SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_DELETE_ONE,
      filter
    );
    return await lastValueFrom(matchingSubscriptionGroup$);
  }
}
