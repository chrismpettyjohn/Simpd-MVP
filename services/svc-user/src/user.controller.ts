import {Controller} from '@nestjs/common';
import {UserRepository} from './user.repository';
import {userEntityToUserWire} from './user.wire';
import {MessagePattern} from '@nestjs/microservices';
import {
  SVC_USER_INTERNAL_EVENT_FIND_ONE,
  UserFindOneInput,
  UserWire,
} from '@simpd/lib-client';

@Controller()
export class UserController {
  constructor(private readonly userRepo: UserRepository) {}

  @MessagePattern(SVC_USER_INTERNAL_EVENT_FIND_ONE)
  async userFindOneByID(data: UserFindOneInput): Promise<UserWire> {
    const matchingRole = await this.userRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return userEntityToUserWire(matchingRole);
  }
}
