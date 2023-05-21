import gql from "graphql-tag";
import { BOOKMARK_COLLECTION_FRAGMENT, BookmarkCollectionFragment } from "../fragments/bookmark-collection.fragment";

export interface BookmarkCollectionCreateInput {
  name: string;
}

export interface BookmarkCollectionCreateMutationVariables {
  input: BookmarkCollectionCreateInput;
}

export interface BookmarkCollectionCreateMutationResponse {
  bookmarkCollectionCreate: BookmarkCollectionFragment;
}

export const BOOKMARK_COLLECTION_CREATE_ONE_MUTATION = gql`
  ${BOOKMARK_COLLECTION_FRAGMENT}
  mutation($input: BookmarkCollectionCreateInput!) {
    bookmarkCreate(
      input: $input
    ) {
      ...BookmarkCollectionFragment
    }
  }
`