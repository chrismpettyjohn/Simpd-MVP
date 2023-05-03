import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {
  AwsS3CreateUploadUrlInput,
  AwsS3CreateUploadUrlResponse,
  AwsS3ViewUrlInput,
  AwsS3ViewUrlResponse,
} from '@simpd/lib-client';
import {
  SVC_AWS_INTERNAL_EVENT_CREATE_UPLOAD_URL,
  SVC_AWS_INTERNAL_EVENT_CREATE_VIEW_URL,
} from 'libs/lib-client/src/svc-aws/aws.const';

@Controller()
export class AWSController {
  constructor() {}

  @MessagePattern(SVC_AWS_INTERNAL_EVENT_CREATE_UPLOAD_URL)
  async createUploadUrl(
    data: AwsS3CreateUploadUrlInput
  ): Promise<AwsS3CreateUploadUrlResponse> {}

  @MessagePattern(SVC_AWS_INTERNAL_EVENT_CREATE_VIEW_URL)
  async createViewUrl(data: AwsS3ViewUrlInput): Promise<AwsS3ViewUrlResponse> {}
}
