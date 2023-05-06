import {Inject} from '@nestjs/common';
import {SVC_PRIVACY_NAME} from './privacy.const';

export const PrivacyClient = () => Inject(SVC_PRIVACY_NAME);
