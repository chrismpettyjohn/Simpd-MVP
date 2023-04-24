import {User} from '@simpd/proto-lib';
import {UserEntity} from './user.entity';

export function userEntityToUserWire(userEntity: UserEntity): User {
  return {
    id: userEntity.id!,
    email: userEntity.email,
  };
}
