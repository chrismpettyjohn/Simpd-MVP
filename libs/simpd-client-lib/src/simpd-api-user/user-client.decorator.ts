import {Inject} from '@nestjs/common';
import {USER_SERVICE_NAME} from './user.const';
import {ClientProxy} from '@nestjs/microservices';

export const UserClient: () => ClientProxy = () =>
  Inject(USER_SERVICE_NAME) as any;
