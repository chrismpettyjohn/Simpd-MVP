import {Injectable} from '@nestjs/common';
import {getSignedUrl} from '@aws-sdk/s3-request-presigner';
import {GetObjectCommand, PutObjectCommand, S3Client} from '@aws-sdk/client-s3';

@Injectable()
export class AWSService {
  async generateUploadUrl(bucket: string, key: string): Promise<string> {
    const client = new S3Client({});
    const command = new PutObjectCommand({Bucket: bucket, Key: key});
    return getSignedUrl(client, command, {expiresIn: 3600});
  }

  async generateViewUrl(bucket: string, key: string): Promise<string> {
    const client = new S3Client({});
    const command = new GetObjectCommand({Bucket: bucket, Key: key});
    return getSignedUrl(client, command, {expiresIn: 3600});
  }
}
