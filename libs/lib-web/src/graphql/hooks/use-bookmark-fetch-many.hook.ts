import { useLazyQuery } from "@apollo/client";
import { BookmarkFragment } from "graphql/fragments/bookmark.fragment";
import { BOOKMARK_FETCH_MANY_QUERY, BookmarkFetchManyInput, BookmarkFetchManyQueryResponse, BookmarkFetchManyQueryVariables } from "graphql/queries/bookmark-fetch-many.query";

export interface UseFetchBookmarkFetchManyResponse {
  fetch(filter: BookmarkFetchManyInput): Promise<BookmarkFragment[]>;
  error?: Error;
  loading: boolean;
  data?: BookmarkFragment[];
}

export function useBookmarkFetchMany(): UseFetchBookmarkFetchManyResponse {
  const [getBookmark, { loading, error, data }] = useLazyQuery<BookmarkFetchManyQueryResponse, BookmarkFetchManyQueryVariables>(BOOKMARK_FETCH_MANY_QUERY);

  const onFetchBookmark = async (filter: BookmarkFetchManyInput): Promise<BookmarkFragment[]> => {
    const matchingBookmark = await getBookmark({ variables: { filter } })
    return matchingBookmark.data!.bookmarks;
  }

  return {
    fetch: onFetchBookmark,
    error,
    loading,
    data: data?.bookmarks,
  }
}