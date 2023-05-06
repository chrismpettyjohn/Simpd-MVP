import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  SubscriptionGroupFindOneInput,
  SubscriptionGroupWire,
} from './subscription-group-client.types';
import {
  SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE_BY_ID,
  SVC_SUBSCRIPTION_GROUP_NAME,
} from './subscription-group.const';

@Injectable()
export class SubscriptionGroupClientService {
  constructor(
    @Inject(SVC_SUBSCRIPTION_GROUP_NAME) private client: ClientProxy
  ) {}

  async findOneByID({
    id,
  }: SubscriptionGroupFindOneInput): Promise<SubscriptionGroupWire> {
    const matchingSubscriptionGroup$ = this.client.send(
      SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE_BY_ID,
      {id}
    );
    return await lastValueFrom(matchingSubscriptionGroup$);
  }
}
