import {Inject} from '@nestjs/common';
import {SVC_SUBSCRIPTION_GROUP_NAME} from './subscription-group.const';
import {ClientProxy} from '@nestjs/microservices';

export const UseSubscriptionGroupClient: () => ClientProxy = () =>
  Inject(SVC_SUBSCRIPTION_GROUP_NAME) as any;
