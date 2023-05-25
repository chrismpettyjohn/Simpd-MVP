import gql from "graphql-tag";
import { BOOKMARK_FRAGMENT, BookmarkFragment } from "../fragments/bookmark.fragment";

export interface BookmarkCreateInput {
  resourceID: number;
  bookmarkCollectionID: number;
}

export interface BookmarkCreateMutationVariables {
  input: BookmarkCreateInput;
}

export interface BookmarkCreateMutationResponse {
  bookmarkCreate: BookmarkFragment;
}

export const BOOKMARK_CREATE_ONE_MUTATION = gql`
  ${BOOKMARK_FRAGMENT}
  mutation($input: BookmarkCreateInput!) {
    bookmarkCreate(
      input: $input
    ) {
      ...BookmarkFragment
    }
  }
`