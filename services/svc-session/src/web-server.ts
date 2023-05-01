import 'dotenv/config';
import {SessionModule, bootstrapService} from '@simpd/lib-api';
import {SESSION_SERVICE_WEB_SERVER_PORT} from '@simpd/lib-client';

bootstrapService(SessionModule, SESSION_SERVICE_WEB_SERVER_PORT);
