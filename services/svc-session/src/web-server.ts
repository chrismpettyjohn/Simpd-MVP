import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SessionServiceModule} from './session.module';
import {SVC_SESSION_NAME, SVC_SESSION_WEB_PORT} from '@simpd/lib-client';

dynamicServiceBootstrap(
  SVC_SESSION_NAME,
  SessionServiceModule,
  SVC_SESSION_WEB_PORT,
  'session'
);
