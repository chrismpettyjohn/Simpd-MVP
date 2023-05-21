import gql from "graphql-tag";

export const BOOKMARK_COLLECTION_FRAGMENT = gql`
  fragment BookmarkCollectionFragment on BookmarkCollectionModel {
    id
    profileID
    name
  }
`

export interface BookmarkCollectionFragment {
  id: number;
  profileID: number;
  name: string;
}