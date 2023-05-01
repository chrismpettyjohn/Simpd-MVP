import {Inject} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {SESSION_SERVICE_NAME} from './session.const';

export const UseSessionClient: () => ClientProxy = () =>
  Inject(SESSION_SERVICE_NAME) as any;
