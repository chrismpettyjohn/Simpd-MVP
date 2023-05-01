import { RoleEntity } from './role.entity';
import { RoleWire } from '@simpd/lib-client';

export function roleEntityToRoleWire(roleEntity: RoleEntity): RoleWire {
  return {
    id: roleEntity.id!,
    name: roleEntity.name,
    scopes: roleEntity.scopes,
  };
}
