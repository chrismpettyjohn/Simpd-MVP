import gql from "graphql-tag";

export const BOOKMARK_FRAGMENT = gql`
  fragment BookmarkFragment on BookmarkModel {
    id
    type
    profileID
    resourceID
    bookmarkCollectionID
  }
`

export enum BookmarkType {
  Post
}

export interface BookmarkFragment {
  id: number;
  type: BookmarkType;
  profileID: number;
  resourceID: number;
  bookmarkCollectionID: number;
}