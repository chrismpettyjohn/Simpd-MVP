import {ProfileWire} from '@simpd/lib-client';
import {ProfileEntity} from './profile.entity';

export function userEntityToProfileWire(
  userEntity: ProfileEntity
): ProfileWire {
  return {
    id: userEntity.id!,
    email: userEntity.email,
  };
}
