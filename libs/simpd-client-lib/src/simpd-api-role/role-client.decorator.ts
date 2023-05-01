import {Inject} from '@nestjs/common';
import {ROLE_SERVICE_NAME} from './role.const';
import {ClientProxy} from '@nestjs/microservices';

export const RoleClient: () => ClientProxy = () =>
  Inject(ROLE_SERVICE_NAME) as any;
