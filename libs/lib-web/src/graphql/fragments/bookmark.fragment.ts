import gql from "graphql-tag";

export const BOOKMARK_FRAGMENT = gql`
  fragment BookmarkFragment on BookmarkModel {
    id
    profileID
    resourceID
    bookmarkCollectionID
  }
`

export interface BookmarkFragment {
  id: number;
  profileID: number;
  resourceID: number;
  bookmarkCollectionID: number;
}