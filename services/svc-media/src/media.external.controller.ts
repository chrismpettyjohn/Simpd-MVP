import { MediaCreateDTO } from './media.dto';
import { IUploadedFile } from './media.types';
import { MediaRepository } from './media.repository';
import { mediaEntityToMediaWire } from './media.wire';
import { FileInterceptor } from '@nestjs/platform-express';
import { GetSession, HasSession, SessionContents } from '@simpd/lib-api';
import { MediaType, MediaWire, ProfileClientService } from '@simpd/lib-client';
import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

@Controller('media')
export class MediaExternalController {
  constructor(
    private readonly mediaRepo: MediaRepository,
    private readonly profileClientService: ProfileClientService
  ) { }

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

    const isImage = file.mimetype.indexOf('image') > -1;
    const isVideo = file.mimetype.indexOf('video') > -1;

    if (!isImage && !isVideo) {
      // TODO: Delete file from AWS
      throw new BadRequestException();
    }

    const fileType = isImage ? MediaType.Image : MediaType.Video;

    const newMedia = await this.mediaRepo.create({
      profileID: matchingProfile.id,
      mediaDetails: {
        sizeInBytes: file.size,
        originalFileName: file.originalname,
      },
      mediaLocation: {
        awsS3Key: file.key,
        awsS3Bucket: file.bucket,
      },
      mediaType: fileType,
    });
    return mediaEntityToMediaWire(newMedia);
  }
}
