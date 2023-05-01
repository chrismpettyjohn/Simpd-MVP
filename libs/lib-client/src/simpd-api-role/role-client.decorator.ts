import {Inject} from '@nestjs/common';
import {SVC_ROLE_NAME} from './role.const';
import {ClientProxy} from '@nestjs/microservices';

export const RoleClient: () => ClientProxy = () => Inject(SVC_ROLE_NAME) as any;
