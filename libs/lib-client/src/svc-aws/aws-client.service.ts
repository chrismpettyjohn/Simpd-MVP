import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  SVC_AWS_INTERNAL_EVENT_CREATE_UPLOAD_URL,
  SVC_AWS_INTERNAL_EVENT_CREATE_VIEW_URL,
  SVC_AWS_NAME,
} from './aws.const';
import {
  AwsS3CreateUploadUrlInput,
  AwsS3CreateUploadUrlResponse,
  AwsS3ViewUrlInput,
  AwsS3ViewUrlResponse,
} from './aws.types';

@Injectable()
export class AWSClientService {
  constructor(@Inject(SVC_AWS_NAME) private client: ClientProxy) {}

  async createUploadUrl(
    input: AwsS3CreateUploadUrlInput
  ): Promise<AwsS3CreateUploadUrlResponse> {
    const matchingAWS$ = this.client.send(
      SVC_AWS_INTERNAL_EVENT_CREATE_UPLOAD_URL,
      {...input}
    );
    return await lastValueFrom(matchingAWS$);
  }

  async createViewUrl(input: AwsS3ViewUrlInput): Promise<AwsS3ViewUrlResponse> {
    const matchingAWS$ = this.client.send(
      SVC_AWS_INTERNAL_EVENT_CREATE_VIEW_URL,
      {...input}
    );
    return await lastValueFrom(matchingAWS$);
  }
}
