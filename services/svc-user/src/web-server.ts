import 'dotenv/config';
import {UserModule} from './user.module';
import {bootstrapService} from '@simpd/lib-api';
import {SVC_USER_WEB_PORT} from '@simpd/lib-client';

bootstrapService(UserModule, SVC_USER_WEB_PORT);
