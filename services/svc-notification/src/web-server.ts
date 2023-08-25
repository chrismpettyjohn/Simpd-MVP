import 'dotenv/config';
import {NotificationModule} from './notification.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {
  SVC_NOTIFICATION_NAME,
  SVC_NOTIFICATION_WEB_PORT,
} from 'libs/lib-client/src/svc-notification/notification.const';

dynamicServiceBootstrap(
  SVC_NOTIFICATION_NAME,
  NotificationModule,
  SVC_NOTIFICATION_WEB_PORT,
  'notification'
);
