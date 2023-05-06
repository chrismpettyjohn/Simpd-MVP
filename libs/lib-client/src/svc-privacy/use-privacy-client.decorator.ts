import {Inject} from '@nestjs/common';
import {SVC_PRIVACY_NAME} from './privacy.const';
import {ClientProxy} from '@nestjs/microservices';

export const UsePrivacyClient: () => ClientProxy = () =>
  Inject(SVC_PRIVACY_NAME) as any;
