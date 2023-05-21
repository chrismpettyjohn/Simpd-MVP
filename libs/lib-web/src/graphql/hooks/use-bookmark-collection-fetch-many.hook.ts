import { useLazyQuery } from "@apollo/client";
import { BookmarkCollectionFragment } from "graphql/fragments/bookmark-collection.fragment";
import { BOOKMARK_COLLECTION_FETCH_MANY_QUERY, BookmarkCollectionFetchManyInput, BookmarkCollectionFetchManyQueryResponse, BookmarkCollectionFetchManyQueryVariables } from "graphql/queries/bookmark-collection-fetch-many.query";

export interface UseFetchBookmarkCollectionFetchManyResponse {
  fetch(filter: BookmarkCollectionFetchManyInput): Promise<BookmarkCollectionFragment[]>;
  error?: Error;
  loading: boolean;
  data?: BookmarkCollectionFragment[];
}

export function useBookmarkCollectionFetchMany(): UseFetchBookmarkCollectionFetchManyResponse {
  const [getBookmarkCollection, { loading, error, data }] = useLazyQuery<BookmarkCollectionFetchManyQueryResponse, BookmarkCollectionFetchManyQueryVariables>(BOOKMARK_COLLECTION_FETCH_MANY_QUERY);

  const onFetchBookmarkCollection = async (filter: BookmarkCollectionFetchManyInput): Promise<BookmarkCollectionFragment[]> => {
    const matchingBookmarkCollection = await getBookmarkCollection({ variables: { filter } })
    return matchingBookmarkCollection.data!.bookmarkCollections;
  }

  return {
    fetch: onFetchBookmarkCollection,
    error,
    loading,
    data: data?.bookmarkCollections,
  }
}