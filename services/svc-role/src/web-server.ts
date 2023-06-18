import 'dotenv/config';
import {RoleModule} from './role.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_ROLE_WEB_SERVER_PORT} from '@simpd/lib-client';

dynamicServiceBootstrap(RoleModule, SVC_ROLE_WEB_SERVER_PORT, 'role');
