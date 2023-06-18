import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {TipModule} from './tip.module';
import {SVC_TIP_WEB_PORT} from '@simpd/lib-client';

dynamicServiceBootstrap(TipModule, SVC_TIP_WEB_PORT, 'tip');
