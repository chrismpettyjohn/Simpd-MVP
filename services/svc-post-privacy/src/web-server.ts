import 'dotenv/config';
import {PostPrivacyModule} from './post-privacy.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {
  SVC_POST_PRIVACY_NAME,
  SVC_POST_PRIVACY_WEB_PORT,
} from '@simpd/lib-client';

dynamicServiceBootstrap(
  SVC_POST_PRIVACY_NAME,
  PostPrivacyModule,
  SVC_POST_PRIVACY_WEB_PORT,
  'post-privacy'
);
