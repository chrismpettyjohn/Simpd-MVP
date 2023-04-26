import {Inject} from '@nestjs/common';
import {USER_SERVICE_NAME} from './user.const';

export const UseClientClient = (): any => {
  return Inject(`${USER_SERVICE_NAME}.PACKAGE`.toUpperCase());
};
