import {Controller} from '@nestjs/common';
import {UserRepository} from './user.repository';
import {userEntityToUserWire} from './user.wire';
import {GrpcMethod} from '@nestjs/microservices';
import {UserFindOneInput, USER_SERVICE_NAME, UserWire} from '@simpd/client-lib';

@Controller()
export class UserController {
  constructor(private readonly userRepo: UserRepository) {}

  @GrpcMethod(USER_SERVICE_NAME, 'findOneByID')
  async findOneByID(data: UserFindOneInput): Promise<UserWire> {
    const matchingRole = await this.userRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return userEntityToUserWire(matchingRole);
  }
}
