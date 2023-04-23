import {ErrorCode} from '@simpd/types';
import {ProfileEntity} from '../database/profile/profile.entity';
import {ProfileRepository} from '../database/profile/profile.repository';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class ProfileByUsernamePipe implements PipeTransform {
  constructor(private readonly profileRepo: ProfileRepository) {}

  async transform(profileUsername: string): Promise<ProfileEntity> {
    const profile = await this.profileRepo.findOne({username: profileUsername});

    if (!profile) {
      throw new NotFoundException(ErrorCode.ProfileDoesNotExist);
    }

    return profile;
  }
}
