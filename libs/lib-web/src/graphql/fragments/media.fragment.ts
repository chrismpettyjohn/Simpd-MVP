import gql from "graphql-tag";

export const MEDIA_FRAGMENT = gql`
  fragment MediaFragment on MediaModel {
    id
    profileID
    type
    url
    details {
      sizeInBytes
      originalFileName
    }
  }
`

export enum MediaType {
  Image = 'Image',
  Video = 'Video',
  Other = 'Other',
}

export interface MediaDetailsModel {
  sizeInBytes: number;
  originalFileName: string;
}


export interface MediaFragment {
  id: number;
  type: MediaType;
  profileID: number;
  url: string;
  details: MediaDetailsModel;
}