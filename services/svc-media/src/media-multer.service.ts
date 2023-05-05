import AWS from 'aws-sdk';
import MulterS3 from 'multer-s3';
import {v4 as uuidv4} from 'uuid';
import {Injectable} from '@nestjs/common';
import {RequestWithSession} from '@simpd/lib-api';
import {
  AWS_ACCESS_KEY_ID,
  AWS_S3_BUCKET,
  AWS_S3_REGION,
  AWS_S3_SECRET_ACCESS_KEY,
} from './media.constant';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_S3_SECRET_ACCESS_KEY,
});

@Injectable()
export class MediaAwsS3MulterService implements MulterOptionsFactory {
  private s3 = new AWS.S3({region: AWS_S3_REGION});
  async createMulterOptions(): Promise<MulterModuleOptions> {
    return {
      storage: MulterS3({
        s3: this.s3,
        bucket: AWS_S3_BUCKET,
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
