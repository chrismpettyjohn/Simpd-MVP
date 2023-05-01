import {Inject} from '@nestjs/common';
import {SVC_USER_NAME} from './user.const';

export const UseClientClient = (): any => {
  return Inject(`${SVC_USER_NAME}.PACKAGE`.toUpperCase());
};
