import {Inject} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {SVC_SESSION_NAME} from './session.const';

export const UseSessionClient: () => ClientProxy = () =>
  Inject(SVC_SESSION_NAME) as any;
