import 'dotenv/config';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SubscriptionGroupModule} from './subscription-group.module';
import {SVC_SUBSCRIPTION_GROUP_WEB_PORT} from '@simpd/lib-client';

bootstrapDynamicService(
  SubscriptionGroupModule,
  SVC_SUBSCRIPTION_GROUP_WEB_PORT
);
