import 'dotenv/config';
import {GatewayModule} from './gateway.module';
import {bootstrapService} from '@simpd/lib-api';
import {SVC_GATEWAY_WEB_SERVER_PORT} from '@simpd/lib-client';

bootstrapService(GatewayModule, SVC_GATEWAY_WEB_SERVER_PORT);
