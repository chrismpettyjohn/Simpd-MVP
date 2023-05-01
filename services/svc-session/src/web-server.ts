import 'dotenv/config';
import {bootstrapService} from '@simpd/lib-api';
import {SessionServiceModule} from './session.module';
import {SVC_SESSION_WEB_PORT} from '@simpd/lib-client';

bootstrapService(SessionServiceModule, SVC_SESSION_WEB_PORT);
