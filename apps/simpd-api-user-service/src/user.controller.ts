import {Controller} from '@nestjs/common';
import {UserRepository} from './user.repository';
import {userEntityToUserWire} from './user.wire';
import {GrpcMethod} from '@nestjs/microservices';
import {
  USER_SERVICE_INTERNAL_EVENT_FIND_ONE_BY_ID,
  UserFindOneInput,
  UserWire,
} from '@simpd/client-lib';

@Controller()
export class UserController {
  constructor(private readonly userRepo: UserRepository) {}

  @GrpcMethod(USER_SERVICE_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async userFindOneByID(data: UserFindOneInput): Promise<UserWire> {
    const matchingRole = await this.userRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return userEntityToUserWire(matchingRole);
  }
}
