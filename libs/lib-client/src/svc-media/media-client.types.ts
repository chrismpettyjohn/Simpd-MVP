export enum MediaType {
  Image = 'image',
  Video = 'video',
  Other = 'other',
}

export interface MediaLocation {
  awsS3Location: string;
}

export interface MediaDetails {
  sizeInBytes: number;
  originalFileName: string;
}

export interface MediaWire {
  id: number;
  profileID: number;
  type: MediaType;
  details: MediaDetails;
  location: MediaLocation;
}

export interface MediaFindOneInput {
  id: number;
}

export interface MediaImageInput {
  profileID: number;
  type: MediaType;
  details: MediaDetails;
  location: MediaLocation;
}
