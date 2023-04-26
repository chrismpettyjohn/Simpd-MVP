import {Controller} from '@nestjs/common';
import {RoleRepository} from './role.repository';
import {roleEntityToRoleWire} from './role.wire';
import {GrpcMethod} from '@nestjs/microservices';
import {Role, RoleFindOneInput, ROLE_SERVICE_NAME} from '@simpd/proto-lib';

@Controller()
export class RoleController {
  constructor(private readonly roleRepo: RoleRepository) {}

  @GrpcMethod(ROLE_SERVICE_NAME, 'FindOne')
  async findOne(data: RoleFindOneInput): Promise<Role> {
    const matchingRole = await this.roleRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return roleEntityToRoleWire(matchingRole);
  }
}
