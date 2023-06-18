import 'dotenv/config';
import {MediaModule} from './media.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {
  SVC_MEDIA_NAME,
  SVC_MEDIA_WEB_PORT,
} from 'libs/lib-client/src/svc-media/media.const';

dynamicServiceBootstrap(
  SVC_MEDIA_NAME,
  MediaModule,
  SVC_MEDIA_WEB_PORT,
  'media'
);
