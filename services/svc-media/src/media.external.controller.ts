import {MediaCreateDTO} from './media.dto';
import {IUploadedFile} from './media.types';
import {MediaRepository} from './media.repository';
import {mediaEntityToMediaWire} from './media.wire';
import {FileInterceptor} from '@nestjs/platform-express';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {MediaType, MediaWire, ProfileClientService} from '@simpd/lib-client';
import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {AWS_S3_BUCKET} from './media.constant';

@Controller('media')
export class MediaExternalController {
  constructor(
    private readonly mediaRepo: MediaRepository,
    private readonly profileClientService: ProfileClientService
  ) {}

  @Post()
  @HasSession()
  @UseInterceptors(FileInterceptor('file'))
  async mediaCreate(
    @GetSession() session: SessionContents,
    @UploadedFile() file: IUploadedFile,
    @Body() input: MediaCreateDTO
  ): Promise<MediaWire> {
    const matchingProfile = await this.profileClientService.findOneByID({
      id: input.profileID,
    });

    if (matchingProfile?.userID !== session.userID) {
      throw new UnauthorizedException();
    }

    const newMedia = await this.mediaRepo.create({
      profileID: matchingProfile.id,
      mediaDetails: {
        sizeInBytes: 0,
        originalFileName: file.originalname,
      },
      mediaLocation: {
        awsS3Key: file.key,
        awsS3Bucket: AWS_S3_BUCKET,
      },
      mediaType: MediaType.Image,
    });
    return mediaEntityToMediaWire(newMedia);
  }
}
