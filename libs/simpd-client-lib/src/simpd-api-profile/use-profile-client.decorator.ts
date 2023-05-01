import {Inject} from '@nestjs/common';
import {SVC_PROFILE_NAME} from './profile.const';
import {ClientProxy} from '@nestjs/microservices';

export const UseClientClient: () => ClientProxy = () =>
  Inject(SVC_PROFILE_NAME) as any;
