import {Inject} from '@nestjs/common';
import {SVC_USER_NAME} from './user.const';
import {ClientProxy} from '@nestjs/microservices';

export const UserClient: () => ClientProxy = () => Inject(SVC_USER_NAME) as any;
