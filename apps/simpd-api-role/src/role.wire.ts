import {Role} from '@simpd/proto-lib';
import {RoleEntity} from './role.entity';

export function roleEntityToRoleWire(roleEntity: RoleEntity): Role {
  return {
    id: roleEntity.id!,
    name: roleEntity.name,
    description: roleEntity.description,
  };
}
