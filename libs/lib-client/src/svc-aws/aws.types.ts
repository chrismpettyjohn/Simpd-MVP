export interface AwsS3CreateUploadUrlInput {
  bucket: string;
  key: string;
}

export interface AwsS3CreateUploadUrlResponse {
  uploadUrl: string;
}

export interface AwsS3ViewUrlInput {
  bucket: string;
  key: string;
}

export interface AwsS3ViewUrlResponse {
  viewUrl: string;
}

export interface AWSService {
  createUploadUrl(
    input: AwsS3CreateUploadUrlInput
  ): Promise<AwsS3CreateUploadUrlResponse>;
  createViewUrl(input: AwsS3ViewUrlInput): Promise<AwsS3ViewUrlResponse>;
}
