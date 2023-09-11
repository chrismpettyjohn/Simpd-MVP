import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {FeatureProfileNotificationsModule} from './feature-profile-notifications.module';
import {
  SVC_FEATURE_PROFILE_NOTIFICATIONS_NAME,
  SVC_FEATURE_PROFILE_NOTIFICATIONS_QUEUE_GROUP,
  SVC_FEATURE_PROFILE_NOTIFICATIONS_WEB_PORT,
} from './feature-profile-notifications.const';

dynamicServiceBootstrap(
  SVC_FEATURE_PROFILE_NOTIFICATIONS_NAME,
  FeatureProfileNotificationsModule,
  SVC_FEATURE_PROFILE_NOTIFICATIONS_WEB_PORT,
  SVC_FEATURE_PROFILE_NOTIFICATIONS_QUEUE_GROUP
);
