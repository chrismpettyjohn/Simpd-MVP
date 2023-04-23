import {UpdateProfileDTO} from './profile.dto';
import {ProfileService} from './profile.service';
import {AWSS3Service} from '../aws/aws-s3.service';
import {MediaService} from '../media/media.service';
import {ProfileType, ProfileWire} from '@simpd/types';
import {GetSession} from '../session/get-session.decorator';
import {HasSession} from '../session/has-session.decorator';
import {profileWire} from '../database/profile/profile.wire';
import {ProfileByUsernamePipe} from './profile-by-username.pipe';
import {ProfileEntity} from '../database/profile/profile.entity';
import {SessionEntity} from '../database/session/session.entity';
import {MediaRepository} from '../database/media/media.repository';
import {ProfileRepository} from '../database/profile/profile.repository';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from 'unique-names-generator';

@Controller('profiles')
@HasSession()
export class ProfileController {
  constructor(
    private readonly profileRepo: ProfileRepository,
    private readonly profileService: ProfileService,
    private readonly mediaRepo: MediaRepository,
    private readonly mediaService: MediaService,
    private readonly awsS3Service: AWSS3Service
  ) {}

  @Post()
  async createProfile(
    @GetSession() session: SessionEntity
  ): Promise<ProfileWire> {
    const randomUsername = uniqueNamesGenerator({
      separator: '-',
      length: 2,
      dictionaries: [adjectives, animals, colors],
    });
    const newProfile = await this.profileRepo.create({
      userID: session.userID,
      username: `${randomUsername}-${session.userID}`,
      displayName: randomUsername.replace('-', ' '),
      biography: '',
      location: '',
      websiteURL: '',
      type: ProfileType.Subscriber,
    });

    return profileWire(newProfile);
  }

  @Get(':username')
  async getProfileByUsername(
    @Param('username', ProfileByUsernamePipe) profile: ProfileEntity
  ): Promise<ProfileWire> {
    return this.profileService.getWireForProfile(profile);
  }

  @Patch(':username')
  async updateProfileByUsername(
    @Param('username', ProfileByUsernamePipe) profile: ProfileEntity,
    @Body() updateProfileDTO: UpdateProfileDTO,
    @GetSession() session: SessionEntity
  ): Promise<void> {
    this.profileService.enforceUserOwnsProfile(profile, session.userID);

    if (updateProfileDTO.profilePictureID) {
      const profilePicture = await this.mediaRepo.findOneOrFail({
        id: updateProfileDTO.profilePictureID,
      });
      this.mediaService.isMediaOwner(profilePicture, session.userID);
    }

    if (updateProfileDTO.coverPictureID) {
      const coverPicture = await this.mediaRepo.findOneOrFail({
        id: updateProfileDTO.coverPictureID,
      });
      this.mediaService.isMediaOwner(coverPicture, session.userID);
    }

    await this.profileRepo.update({id: profile.id!}, updateProfileDTO);
  }

  @Delete(':username')
  async deleteProfileByUsername(
    @Param('username', ProfileByUsernamePipe) profile: ProfileEntity,
    @GetSession() session: SessionEntity
  ): Promise<void> {
    this.profileService.enforceUserOwnsProfile(profile, session.userID);
    await this.profileRepo.delete({id: profile.id!});
  }
}
