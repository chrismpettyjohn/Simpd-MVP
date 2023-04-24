import {Session} from '@simpd/proto-lib';
import {SessionEntity} from './session.entity';

export function sessionEntityToSessionWire(
  sessionEntity: SessionEntity
): Session {
  return {
    id: sessionEntity.id!,
    userID: sessionEntity.userID,
  };
}
