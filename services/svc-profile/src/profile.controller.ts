import {Controller} from '@nestjs/common';
import {GrpcMethod} from '@nestjs/microservices';
import {ProfileRepository} from './profile.repository';
import {userEntityToProfileWire} from './profile.wire';
import {
  SVC_USER_INTERNAL_EVENT_FIND_ONE_BY_ID,
  ProfileFindOneInput,
  ProfileWire,
} from '@simpd/client-lib';

@Controller()
export class ProfileController {
  constructor(private readonly userRepo: ProfileRepository) {}

  @GrpcMethod(SVC_USER_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async userFindOneByID(data: ProfileFindOneInput): Promise<ProfileWire> {
    const matchingRole = await this.userRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return userEntityToProfileWire(matchingRole);
  }
}
