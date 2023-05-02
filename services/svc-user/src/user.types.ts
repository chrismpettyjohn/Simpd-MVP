import {RequestWithSession} from '@simpd/lib-api';

export interface SvcUserRequest extends Omit<RequestWithSession, 'params'> {
  params: {
    userID: number;
  };
}
