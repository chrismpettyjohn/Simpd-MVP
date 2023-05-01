import 'dotenv/config';
import {RoleModule} from './role.module';
import {bootstrapService} from '@simpd/lib-api';
import {SVC_ROLE_WEB_SERVER_PORT} from '@simpd/lib-client';

bootstrapService(RoleModule, SVC_ROLE_WEB_SERVER_PORT);
