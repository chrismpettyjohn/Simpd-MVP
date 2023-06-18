import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {ProfileSubscriptionGroupModule} from './profile-subscription-group.module';
import {
  SVC_PROFILE_SUBSCRIPTION_GROUP_NAME,
  SVC_PROFILE_SUBSCRIPTION_GROUP_WEB_PORT,
} from '@simpd/lib-client';

dynamicServiceBootstrap(
  SVC_PROFILE_SUBSCRIPTION_GROUP_NAME,
  ProfileSubscriptionGroupModule,
  SVC_PROFILE_SUBSCRIPTION_GROUP_WEB_PORT,
  'profile-subscription-group'
);
