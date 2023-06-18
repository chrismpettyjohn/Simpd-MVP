import 'dotenv/config';
import {RoleModule} from './role.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_ROLE_NAME, SVC_ROLE_WEB_SERVER_PORT} from '@simpd/lib-client';

dynamicServiceBootstrap(
  SVC_ROLE_NAME,
  RoleModule,
  SVC_ROLE_WEB_SERVER_PORT,
  'role'
);
