import { useLazyQuery } from "@apollo/client";
import { BookmarkCollectionFragment } from "../fragments/bookmark-collection.fragment";
import { BOOKMARK_COLLECTION_FETCH_ONE_QUERY, BookmarkCollectionFetchOneInput, BookmarkCollectionFetchOneQueryResponse, BookmarkCollectionFetchOneQueryVariables } from "../queries/bookmark-collection-fetch-one.query";

export interface UseFetchBookmarkCollectionFetchOneResponse {
  fetch(filter: BookmarkCollectionFetchOneInput): Promise<BookmarkCollectionFragment>;
  error?: Error;
  loading: boolean;
  data?: BookmarkCollectionFragment;
}

export function useBookmarkCollectionFetchOne(): UseFetchBookmarkCollectionFetchOneResponse {
  const [getBookmarkCollection, { loading, error, data }] = useLazyQuery<BookmarkCollectionFetchOneQueryResponse, BookmarkCollectionFetchOneQueryVariables>(BOOKMARK_COLLECTION_FETCH_ONE_QUERY);

  const onFetchBookmarkCollection = async (filter: BookmarkCollectionFetchOneInput): Promise<BookmarkCollectionFragment> => {
    const matchingBookmarkCollection = await getBookmarkCollection({ variables: { filter } })
    return matchingBookmarkCollection.data!.bookmarkCollection;
  }

  return {
    fetch: onFetchBookmarkCollection,
    error,
    loading,
    data: data?.bookmarkCollection,
  }
}