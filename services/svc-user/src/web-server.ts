import 'dotenv/config';
import {UserModule} from './user.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_USER_WEB_PORT} from '@simpd/lib-client';

bootstrapDynamicService(UserModule, SVC_USER_WEB_PORT, 'user');
