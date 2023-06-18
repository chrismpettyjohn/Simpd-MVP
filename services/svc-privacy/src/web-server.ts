import 'dotenv/config';
import {PrivacyModule} from './privacy.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {
  SVC_PRIVACY_NAME,
  SVC_PRIVACY_WEB_PORT,
} from 'libs/lib-client/src/svc-privacy/privacy.const';

dynamicServiceBootstrap(
  SVC_PRIVACY_NAME,
  PrivacyModule,
  SVC_PRIVACY_WEB_PORT,
  'privacy'
);
