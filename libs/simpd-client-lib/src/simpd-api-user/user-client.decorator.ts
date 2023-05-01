import {Inject} from '@nestjs/common';
import {USER_SERVICE_NAME} from './user.const';

export const UserClient = () => Inject(USER_SERVICE_NAME);
