import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {ProfileRepository} from './profile.repository';
import {profileEntityToProfileWire} from './profile.wire';
import {
  ProfileFindOneInput,
  ProfileWire,
  SVC_PROFILE_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class ProfileController {
  constructor(private readonly profileRepo: ProfileRepository) {}

  @MessagePattern(SVC_PROFILE_INTERNAL_EVENT_FIND_ONE)
  async profileFindOneByID(data: ProfileFindOneInput): Promise<ProfileWire> {
    const matchingRole = await this.profileRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return profileEntityToProfileWire(matchingRole);
  }
}
