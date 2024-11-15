import 'dotenv/config';
import {MessageModule} from './message.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {
  SVC_MESSAGE_NAME,
  SVC_MESSAGE_WEB_PORT,
} from 'libs/lib-client/src/svc-message/message.const';

dynamicServiceBootstrap(
  SVC_MESSAGE_NAME,
  MessageModule,
  SVC_MESSAGE_WEB_PORT,
  'message'
);
