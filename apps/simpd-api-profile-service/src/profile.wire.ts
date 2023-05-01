import {ProfileWire} from '@simpd/client-lib';
import {ProfileEntity} from './profile.entity';

export function userEntityToProfileWire(
  userEntity: ProfileEntity
): ProfileWire {
  return {
    id: userEntity.id!,
    email: userEntity.email,
  };
}
