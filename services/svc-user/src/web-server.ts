import 'dotenv/config';
import {UserModule} from './user.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_USER_WEB_PORT} from '@simpd/lib-client';

dynamicServiceBootstrap(UserModule, SVC_USER_WEB_PORT, 'user');
