import {Controller} from '@nestjs/common';
import {GrpcMethod} from '@nestjs/microservices';
import {ProfileRepository} from './profile.repository';
import {profileEntityToProfileWire} from './profile.wire';
import {
  SVC_USER_INTERNAL_EVENT_FIND_ONE_BY_ID,
  ProfileFindOneInput,
  ProfileWire,
} from '@simpd/lib-client';

@Controller()
export class ProfileController {
  constructor(private readonly profileRepo: ProfileRepository) {}

  @GrpcMethod(SVC_USER_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async profileFindOneByID(data: ProfileFindOneInput): Promise<ProfileWire> {
    const matchingRole = await this.profileRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return profileEntityToProfileWire(matchingRole);
  }
}
