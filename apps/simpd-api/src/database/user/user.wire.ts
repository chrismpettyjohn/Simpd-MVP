import {UserEntity} from './user.entity';
import {roleWire} from '../role/role.wire';
import {PrivateUserWire} from '@simpd/types';

export function privateUserWire(entity: UserEntity): PrivateUserWire {
  return {
    id: entity.id!,
    role: roleWire(entity.role!),
    email: entity.email,
  };
}
