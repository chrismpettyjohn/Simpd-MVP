import 'dotenv/config';
import {GatewayModule} from './gateway.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_GATEWAY_WEB_SERVER_PORT} from '@simpd/lib-client';

dynamicServiceBootstrap(GatewayModule, SVC_GATEWAY_WEB_SERVER_PORT, 'gateway');
