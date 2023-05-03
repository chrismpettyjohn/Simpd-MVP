import AWS from 'aws-sdk';
import MulterS3 from 'multer-s3';
import {v4 as uuidv4} from 'uuid';
import {Injectable} from '@nestjs/common';
import {MEDIA_S3_BUCKET} from './media.constant';
import {RequestWithSession} from '@simpd/lib-api';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';

@Injectable()
export class MediaAwsS3MulterService implements MulterOptionsFactory {
  async createMulterOptions(): Promise<MulterModuleOptions> {
    return {
      storage: MulterS3({
        s3: new AWS.S3() as any,
        bucket: MEDIA_S3_BUCKET,
        key: (
          req: RequestWithSession,
          file: any,
          cb: (error: Error | null, s3Path: string) => void
        ) => {
          const fileName = `${uuidv4()}-${
            file.originalname
          }-${Date.toString()}`;
          const s3Path = `users/${req.session.userID}/${fileName}`;
          cb(null, s3Path);
        },
      }),
    };
  }
}
