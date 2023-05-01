import {SessionWire} from '@simpd/lib-client';
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
