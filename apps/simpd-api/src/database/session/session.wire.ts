import {SessionWire} from '@simpd/types';
import {SessionEntity} from './session.entity';
import {privateUserWire} from '../user/user.wire';
import {profileWire} from '../profile/profile.wire';

export function sessionWire(
  sessionEntity: SessionEntity,
  activeProfileID: number,
  profilePictureURL: Array<string | undefined>,
  coverPictureURL: Array<string | undefined>
): SessionWire {
  const activeProfile = sessionEntity.user!.profiles!.findIndex(
    _ => _.id === activeProfileID
  );
  return {
    id: sessionEntity.id!,
    userID: sessionEntity.userID,
    privateUser: privateUserWire(sessionEntity.user!),
    activeProfile: profileWire(
      sessionEntity.user!.profiles![activeProfile],
      profilePictureURL[activeProfile]
    ),
    profiles: sessionEntity.user!.profiles!.map((_, index) =>
      profileWire(_, profilePictureURL[index], coverPictureURL[index])
    ),
    createdAt: sessionEntity.createdAt,
    endedAt: sessionEntity.endedAt,
    ipAddress: sessionEntity.ipAddress,
    geoLocation: sessionEntity.geoLocation,
    operatingSystem: sessionEntity.operatingSystem,
  };
}
