import gql from "graphql-tag";
import { BOOKMARK_FRAGMENT, BookmarkFragment } from "graphql/fragments/bookmark.fragment";

export interface BookmarkFetchOneInput {
  id?: number;
  profileID?: number;
}

export interface BookmarkFetchOneQueryVariables {
  filter: BookmarkFetchOneInput;
}

export interface BookmarkFetchOneQueryResponse {
  bookmark: BookmarkFragment;
}

export const BOOKMARK_FETCH_ONE_QUERY = gql`
  ${BOOKMARK_FRAGMENT}
  query($filter: BookmarkFetchOneInput!) {
    bookmark(
      filter: $filter
    ) {
      ...BookmarkFragment
    }
  }
`