import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {TipModule} from './tip.module';
import {SVC_TIP_NAME, SVC_TIP_WEB_PORT} from '@simpd/lib-client';

dynamicServiceBootstrap(SVC_TIP_NAME, TipModule, SVC_TIP_WEB_PORT, 'tip');
