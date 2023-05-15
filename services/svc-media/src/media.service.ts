import AWS from 'aws-sdk';
import {Injectable} from '@nestjs/common';
import {
  AWS_ACCESS_KEY_ID,
  AWS_S3_BUCKET,
  AWS_S3_REGION,
  AWS_S3_SECRET_ACCESS_KEY,
} from './media.constant';

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_S3_SECRET_ACCESS_KEY,
});

@Injectable()
export class MediaService {
  private s3 = new AWS.S3({region: AWS_S3_REGION});

  async getUrl(key: string): Promise<string> {
    return await this.s3.getSignedUrl('getObject', {
      Bucket: AWS_S3_BUCKET,
      Key: key,
    });
  }
}
