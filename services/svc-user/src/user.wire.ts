import { UserWire } from '@simpd/lib-client';
import { UserEntity } from './user.entity';

export function userEntityToUserWire(userEntity: UserEntity): UserWire {
  return {
    id: userEntity.id!,
    email: userEntity.email,
    roleID: userEntity.roleID,
  };
}
