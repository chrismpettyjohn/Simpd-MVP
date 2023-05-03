import 'dotenv/config';
import {RoleModule} from './role.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_ROLE_WEB_SERVER_PORT} from '@simpd/lib-client';

bootstrapDynamicService(RoleModule, SVC_ROLE_WEB_SERVER_PORT);
