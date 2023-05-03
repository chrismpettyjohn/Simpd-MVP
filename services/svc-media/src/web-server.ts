import 'dotenv/config';
import {MediaModule} from './media.module';
import {bootstrapService} from '@simpd/lib-api';
import {SVC_MEDIA_WEB_PORT} from 'libs/lib-client/src/svc-media/media.const';

bootstrapService(MediaModule, SVC_MEDIA_WEB_PORT);
