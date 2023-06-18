import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SubscriptionGroupModule} from './subscription-group.module';
import {
  SVC_SUBSCRIPTION_GROUP_NAME,
  SVC_SUBSCRIPTION_GROUP_WEB_PORT,
} from '@simpd/lib-client';

dynamicServiceBootstrap(
  SVC_SUBSCRIPTION_GROUP_NAME,
  SubscriptionGroupModule,
  SVC_SUBSCRIPTION_GROUP_WEB_PORT,
  'subscription-group'
);
