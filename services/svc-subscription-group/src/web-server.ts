import 'dotenv/config';
import {SubscriptionGroupModule} from './subscription-group.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_SUBSCRIPTION_GROUP_WEB_PORT} from 'libs/lib-client/src/svc-subscriptionGroup/subscriptionGroup.const';

bootstrapDynamicService(
  SubscriptionGroupModule,
  SVC_SUBSCRIPTION_GROUP_WEB_PORT
);
