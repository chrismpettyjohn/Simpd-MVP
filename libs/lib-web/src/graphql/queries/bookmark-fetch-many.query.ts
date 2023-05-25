import gql from "graphql-tag";
import { BOOKMARK_FRAGMENT, BookmarkFragment } from "../fragments/bookmark.fragment";

export interface BookmarkFetchManyInput {
  ids?: number[];
  profileIDs?: number[];
}

export interface BookmarkFetchManyQueryVariables {
  filter: BookmarkFetchManyInput;
}

export interface BookmarkFetchManyQueryResponse {
  bookmarks: BookmarkFragment[];
}

export const BOOKMARK_FETCH_MANY_QUERY = gql`
  ${BOOKMARK_FRAGMENT}
  query($filter: BookmarkFindManyInput!) {
    bookmarks(
      filter: $filter
    ) {
      ...BookmarkFragment
    }
  }
`