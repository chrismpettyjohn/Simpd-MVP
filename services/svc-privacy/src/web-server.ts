import 'dotenv/config';
import {PrivacyModule} from './privacy.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_PRIVACY_WEB_PORT} from 'libs/lib-client/src/svc-privacy/privacy.const';

dynamicServiceBootstrap(PrivacyModule, SVC_PRIVACY_WEB_PORT, 'privacy');
