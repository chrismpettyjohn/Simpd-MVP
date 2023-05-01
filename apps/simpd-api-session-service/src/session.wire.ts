import {SessionWire} from '@simpd/client-lib';
import {SessionEntity} from './session.entity';

export function sessionEntityToSessionWire(
  sessionEntity: SessionEntity
): SessionWire {
  return {
    id: sessionEntity.id!,
    userID: sessionEntity.userID,
    expiresAt: sessionEntity.expiresAt.getHours(),
  };
}
