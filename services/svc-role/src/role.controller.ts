import {Controller} from '@nestjs/common';
import {RoleRepository} from './role.repository';
import {roleEntityToRoleWire} from './role.wire';
import {MessagePattern} from '@nestjs/microservices';
import {
  SVC_ROLE_INTERNAL_EVENT_FIND_ONE_BY_ID,
  RoleFindOneInput,
  RoleWire,
} from '@simpd/lib-client';

@Controller()
export class RoleController {
  constructor(private readonly roleRepo: RoleRepository) {}

  @MessagePattern(SVC_ROLE_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async roleFindOneByID(data: RoleFindOneInput): Promise<RoleWire> {
    const matchingRole = await this.roleRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return roleEntityToRoleWire(matchingRole);
  }
}
