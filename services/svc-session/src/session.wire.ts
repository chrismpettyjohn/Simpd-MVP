import {SessionWire} from '@simpd/lib-client';
import {SessionEntity} from './session.entity';

export function sessionEntityToSessionWire(
  sessionEntity: SessionEntity
): SessionWire {
  return {
    sessionID: sessionEntity.id!,
    userID: sessionEntity.userID,
    profileID: sessionEntity.profileID,
    expiresAt: sessionEntity.expiresAt.getHours(),
  };
}
