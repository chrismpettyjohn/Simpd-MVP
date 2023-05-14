import {ProfileWire} from '@simpd/lib-client';
import {ProfileEntity} from './profile.entity';

export function profileEntityToProfileWire(
  profileEntity: ProfileEntity
): ProfileWire {
  return {
    id: profileEntity.id!,
    userID: profileEntity.userID,
    username: profileEntity.username,
    displayName: profileEntity.displayName,
    subscriptionGroupIDs: profileEntity.subscriptionGroupIDs,
  };
}
