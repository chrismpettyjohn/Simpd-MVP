import {Controller} from '@nestjs/common';
import {UserRepository} from './user.repository';
import {userEntityToUserWire} from './user.wire';
import {GrpcMethod} from '@nestjs/microservices';
import {USER_SERVICE_NAME} from '@simpd/api-lib';
import {User, UserFindOneInput} from '@simpd/proto-lib';

@Controller()
export class UserController {
  constructor(private readonly userRepo: UserRepository) {}

  @GrpcMethod(USER_SERVICE_NAME, 'FindOne')
  async findOne(data: UserFindOneInput): Promise<User> {
    const matchingRole = await this.userRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return userEntityToUserWire(matchingRole);
  }
}
