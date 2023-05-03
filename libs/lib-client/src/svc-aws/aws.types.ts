export interface AwsS3CreateUploadUrlInput {
  userID: number;
  profileID: number;
}

export interface AwsS3CreateUploadUrlResponse {
  uploadUrl: string;
}

export interface AwsS3ViewUrlInput {
  s3Key: string;
}

export interface AwsS3ViewUrlResponse {
  fileUrl: string;
}

export interface AWSService {
  createUploadUrl(
    input: AwsS3CreateUploadUrlInput
  ): Promise<AwsS3CreateUploadUrlResponse>;
  createViewUrl(input: AwsS3ViewUrlInput): Promise<AwsS3ViewUrlResponse>;
}
