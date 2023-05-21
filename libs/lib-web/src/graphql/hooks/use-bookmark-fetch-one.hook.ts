import { useLazyQuery } from "@apollo/client";
import { BookmarkFragment } from "../fragments/bookmark.fragment";
import { BOOKMARK_FETCH_ONE_QUERY, BookmarkFetchOneInput, BookmarkFetchOneQueryResponse, BookmarkFetchOneQueryVariables } from "../queries/bookmark-fetch-one.query";

export interface UseFetchBookmarkFetchOneResponse {
  fetch(filter: BookmarkFetchOneInput): Promise<BookmarkFragment>;
  error?: Error;
  loading: boolean;
  data?: BookmarkFragment;
}

export function useBookmarkFetchOne(): UseFetchBookmarkFetchOneResponse {
  const [getBookmark, { loading, error, data }] = useLazyQuery<BookmarkFetchOneQueryResponse, BookmarkFetchOneQueryVariables>(BOOKMARK_FETCH_ONE_QUERY);

  const onFetchBookmark = async (filter: BookmarkFetchOneInput): Promise<BookmarkFragment> => {
    const matchingBookmark = await getBookmark({ variables: { filter } })
    return matchingBookmark.data!.bookmark;
  }

  return {
    fetch: onFetchBookmark,
    error,
    loading,
    data: data?.bookmark,
  }
}