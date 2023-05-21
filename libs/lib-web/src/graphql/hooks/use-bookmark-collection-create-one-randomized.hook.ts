import { useMutation } from "@apollo/client";
import { BookmarkCollectionFragment } from "../fragments/bookmark-collection.fragment";
import { BOOKMARK_COLLECTION_CREATE_ONE_RANDOMIZED_MUTATION, BookmarkCollectionCreateRandomizedMutationResponse } from "../mutation/bookmark-collection-create-one-randomized.mutation";

export interface UseBookmarkCollectionCreateRandomizedResponse {
  execute(): Promise<BookmarkCollectionFragment>;
  error?: Error;
  loading: boolean;
  data?: BookmarkCollectionFragment;
}

export function useBookmarkCollectionCreateRandomized(): UseBookmarkCollectionCreateRandomizedResponse {
  const [createBookmarkCollectionRandomized, { loading, error, data }] = useMutation<BookmarkCollectionCreateRandomizedMutationResponse>(BOOKMARK_COLLECTION_CREATE_ONE_RANDOMIZED_MUTATION);

  const onCreateBookmarkCollectionRandomized = async () => {
    const newPost = await createBookmarkCollectionRandomized()
    return newPost.data!.bookmarkCollectionCreateRandomized;
  }

  return {
    execute: onCreateBookmarkCollectionRandomized,
    error,
    loading,
    data: data?.bookmarkCollectionCreateRandomized,
  }
}