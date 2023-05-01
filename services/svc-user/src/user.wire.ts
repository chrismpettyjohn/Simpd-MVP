import {UserWire} from '@simpd/client-lib';
import {UserEntity} from './user.entity';

export function userEntityToUserWire(userEntity: UserEntity): UserWire {
  return {
    id: userEntity.id!,
    email: userEntity.email,
  };
}
