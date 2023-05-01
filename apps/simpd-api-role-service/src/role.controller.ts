import {Controller} from '@nestjs/common';
import {RoleRepository} from './role.repository';
import {roleEntityToRoleWire} from './role.wire';
import {GrpcMethod} from '@nestjs/microservices';
import {RoleFindOneInput, ROLE_SERVICE_NAME, RoleWire} from '@simpd/client-lib';

@Controller()
export class RoleController {
  constructor(private readonly roleRepo: RoleRepository) {}

  @GrpcMethod(ROLE_SERVICE_NAME, 'findOneByID')
  async findOneByID(data: RoleFindOneInput): Promise<RoleWire> {
    const matchingRole = await this.roleRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return roleEntityToRoleWire(matchingRole);
  }
}
