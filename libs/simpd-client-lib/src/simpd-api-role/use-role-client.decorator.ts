import {Inject} from '@nestjs/common';
import {SVC_ROLE_NAME} from './role.const';

export const UseRoleClient = (): any => {
  return Inject(`${SVC_ROLE_NAME}.PACKAGE`.toUpperCase());
};
