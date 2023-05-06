import {Inject} from '@nestjs/common';
import {SVC_SUBSCRIPTION_GROUP_NAME} from './subscription-group.const';

export const SubscriptionGroupClient = () =>
  Inject(SVC_SUBSCRIPTION_GROUP_NAME);
