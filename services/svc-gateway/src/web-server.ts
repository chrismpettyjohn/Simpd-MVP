import 'dotenv/config';
import {GatewayModule} from './gateway.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_GATEWAY_WEB_SERVER_PORT} from '@simpd/lib-client';

bootstrapDynamicService(GatewayModule, SVC_GATEWAY_WEB_SERVER_PORT, 'gateway');
