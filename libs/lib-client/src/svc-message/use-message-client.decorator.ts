import {Inject} from '@nestjs/common';
import {SVC_MESSAGE_NAME} from './message.const';
import {ClientProxy} from '@nestjs/microservices';

export const UseMessageClient: () => ClientProxy = () =>
  Inject(SVC_MESSAGE_NAME) as any;
