import 'dotenv/config';
import {MessageModule} from './message.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_MESSAGE_WEB_PORT} from 'libs/lib-client/src/svc-message/message.const';

bootstrapDynamicService(MessageModule, SVC_MESSAGE_WEB_PORT, 'message');
