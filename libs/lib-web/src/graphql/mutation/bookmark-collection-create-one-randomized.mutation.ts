import gql from "graphql-tag";
import { BOOKMARK_COLLECTION_FRAGMENT, BookmarkCollectionFragment } from "graphql/fragments/bookmark-collection.fragment";

export interface BookmarkCollectionCreateRandomizedMutationResponse {
  bookmarkCollectionCreateRandomized: BookmarkCollectionFragment;
}

export const BOOKMARK_COLLECTION_CREATE_ONE_RANDOMIZED_MUTATION = gql`
  ${BOOKMARK_COLLECTION_FRAGMENT}
  mutation {
    bookmarkCreateRandomized {
      ...BookmarkCollectionFragment
    }
  }
`