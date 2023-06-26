import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {ProfileSubscriptionGroupMembershipModule} from './profile-subscription-group-membership.module';
import {
  SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_NAME,
  SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_WEB_PORT,
} from '@simpd/lib-client';

dynamicServiceBootstrap(
  SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_NAME,
  ProfileSubscriptionGroupMembershipModule,
  SVC_PROFILE_SUBSCRIPTION_GROUP_MEMBERSHIP_WEB_PORT,
  'profile-subscription-group-membership'
);
