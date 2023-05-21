import gql from "graphql-tag";
import { BOOKMARK_COLLECTION_FRAGMENT, BookmarkCollectionFragment } from "graphql/fragments/bookmark-collection.fragment";

export interface BookmarkCollectionFetchOneInput {
  id?: number;
  profileID?: number;
}

export interface BookmarkCollectionFetchOneQueryVariables {
  filter: BookmarkCollectionFetchOneInput;
}

export interface BookmarkCollectionFetchOneQueryResponse {
  bookmarkCollection: BookmarkCollectionFragment;
}

export const BOOKMARK_COLLECTION_FETCH_ONE_QUERY = gql`
  ${BOOKMARK_COLLECTION_FRAGMENT}
  query($filter: BookmarkCollectionFindOneInput!) {
    bookmarkCollection(
      filter: $filter
    ) {
      ...BookmarkCollectionFragment
    }
  }
`