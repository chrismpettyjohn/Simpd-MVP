import {Inject} from '@nestjs/common';
import {ROLE_SERVICE_NAME} from './role.const';

export const UseRoleClient = (): any => {
  return Inject(`${ROLE_SERVICE_NAME}.PACKAGE`.toUpperCase());
};
