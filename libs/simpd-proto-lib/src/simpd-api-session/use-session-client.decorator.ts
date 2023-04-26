import {Inject} from '@nestjs/common';
import {SESSION_SERVICE_NAME} from './session.const';

export const UseSessionClient = (): any => {
  return Inject(`${SESSION_SERVICE_NAME}.PACKAGE`.toUpperCase());
};
