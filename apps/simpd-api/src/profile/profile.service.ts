import {AWSS3Service} from '../aws/aws-s3.service';
import {ErrorCode, ProfileWire} from '@simpd/types';
import {profileWire} from '../database/profile/profile.wire';
import {ProfileEntity} from '../database/profile/profile.entity';
import {Injectable, UnauthorizedException} from '@nestjs/common';

@Injectable()
export class ProfileService {
  constructor(private readonly awsS3Service: AWSS3Service) {}

  enforceUserOwnsProfile(profile: ProfileEntity, userID: number) {
    if (profile.userID !== userID) {
      throw new UnauthorizedException(ErrorCode.ResourceAccessDenied);
    }
  }

  async getWireForProfile(profile: ProfileEntity): Promise<ProfileWire> {
    const profilePictureURL = profile.profilePicture
      ? await this.awsS3Service.getObjectURL(profile.profilePicture.s3Key)
      : undefined;

    const coverPictureURL = profile.coverPicture
      ? await this.awsS3Service.getObjectURL(profile.coverPicture.s3Key)
      : undefined;

    return profileWire(profile, profilePictureURL, coverPictureURL);
  }
}
