import 'dotenv/config';
import {MediaModule} from './media.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_MEDIA_WEB_PORT} from 'libs/lib-client/src/svc-media/media.const';

bootstrapDynamicService(MediaModule, SVC_MEDIA_WEB_PORT);
