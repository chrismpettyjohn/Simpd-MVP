import 'dotenv/config';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SessionServiceModule} from './session.module';
import {SVC_SESSION_WEB_PORT} from '@simpd/lib-client';

bootstrapDynamicService(SessionServiceModule, SVC_SESSION_WEB_PORT);
