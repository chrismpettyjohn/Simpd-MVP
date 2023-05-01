import {Inject} from '@nestjs/common';
import {ROLE_SERVICE_NAME} from './role.const';

export const RoleClient = () => Inject(ROLE_SERVICE_NAME);
