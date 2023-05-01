import {RoleEntity} from './role.entity';
import {RoleWire} from '@simpd/client-lib';

export function roleEntityToRoleWire(roleEntity: RoleEntity): RoleWire {
  return {
    id: roleEntity.id!,
    name: roleEntity.name,
  };
}
