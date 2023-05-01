import {Inject} from '@nestjs/common';
import {PROFILE_SERVICE_NAME} from './profile.const';
import {ClientProxy} from '@nestjs/microservices';

export const UseClientClient: () => ClientProxy = () =>
  Inject(PROFILE_SERVICE_NAME) as any;
