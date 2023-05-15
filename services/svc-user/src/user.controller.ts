import {HashService} from '@simpd/lib-api';
import {UserRepository} from './user.repository';
import {userEntityToUserWire} from './user.wire';
import {MessagePattern, Payload} from '@nestjs/microservices';
import {BadRequestException, Controller} from '@nestjs/common';
import {
  SVC_USER_INTERNAL_EVENT_FIND_ONE,
  SVC_USER_INTERNAL_EVENT_PASSWORD_COMPARISON,
  UserFindOneInput,
  UserFindOneResponse,
  UserPasswordComparisonInput,
  UserPasswordComparisonResponse,
} from '@simpd/lib-client';

@Controller()
export class UserController {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly hashService: HashService
  ) {}

  @MessagePattern(SVC_USER_INTERNAL_EVENT_FIND_ONE)
  async userFindOneByID(data: UserFindOneInput): Promise<UserFindOneResponse> {
    console.log(data);

    const noData = !data.id && !data.email;

    if (noData) {
      throw new BadRequestException();
    }

    const matchingUser = await this.userRepo.findOneOrFail({
      where: {
        id: data.id,
        email: data.email,
      },
    });
    return userEntityToUserWire(matchingUser);
  }
  @MessagePattern(SVC_USER_INTERNAL_EVENT_PASSWORD_COMPARISON)
  async userPasswordComparison(
    data: UserPasswordComparisonInput
  ): Promise<UserPasswordComparisonResponse> {
    const matchingUser = await this.userRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });

    const hasMatchingPassword = await this.hashService.compare(
      data.password,
      matchingUser.hashedPassword
    );

    return {
      id: data.id,
      matching: hasMatchingPassword,
    };
  }
}
