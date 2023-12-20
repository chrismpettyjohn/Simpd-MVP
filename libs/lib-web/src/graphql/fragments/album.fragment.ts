import gql from "graphql-tag";

export const ALBUM_FRAGMENT: any = gql`
  fragment AlbumFragment on AlbumModel {
    id
    profileID
    name
    description
    createdAt
    updatedAt
  }
`

export interface AlbumFragment {
  id: number;
  profileID: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}