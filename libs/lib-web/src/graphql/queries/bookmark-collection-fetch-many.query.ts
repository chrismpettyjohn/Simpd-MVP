import gql from "graphql-tag";
import { BOOKMARK_COLLECTION_FRAGMENT, BookmarkCollectionFragment } from "graphql/fragments/bookmark-collection.fragment";

export interface BookmarkCollectionFetchManyInput {
  ids?: number[];
  profileIDs?: number[];
}

export interface BookmarkCollectionFetchManyQueryVariables {
  filter: BookmarkCollectionFetchManyInput;
}

export interface BookmarkCollectionFetchManyQueryResponse {
  bookmarkCollections: BookmarkCollectionFragment[];
}

export const BOOKMARK_COLLECTION_FETCH_MANY_QUERY = gql`
  ${BOOKMARK_COLLECTION_FRAGMENT}
  query($filter: BookmarkCollectionFindManyInput!) {
    bookmarkCollections(
      filter: $filter
    ) {
      ...BookmarkCollectionFragment
    }
  }
`