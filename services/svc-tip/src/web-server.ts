import 'dotenv/config';
import { bootstrapDynamicService } from '@simpd/lib-api';
import { TipModule } from './tip.module';
import { SVC_TIP_WEB_PORT } from '@simpd/lib-client';

bootstrapDynamicService(TipModule, SVC_TIP_WEB_PORT);
