import { useMutation } from "@apollo/client";
import { BookmarkCollectionFragment } from "graphql/fragments/bookmark-collection.fragment";
import { BOOKMARK_COLLECTION_CREATE_ONE_MUTATION, BookmarkCollectionCreateInput, BookmarkCollectionCreateMutationResponse, BookmarkCollectionCreateMutationVariables } from "graphql/mutation/bookmark-collection-create-one.mutation";

export interface UseBookmarkCollectionCreateResponse {
  execute(input: BookmarkCollectionCreateInput): Promise<BookmarkCollectionFragment>;
  error?: Error;
  loading: boolean;
  data?: BookmarkCollectionFragment;
}

export function useBookmarkCollectionCreate(): UseBookmarkCollectionCreateResponse {
  const [createBookmarkCollection, { loading, error, data }] = useMutation<BookmarkCollectionCreateMutationResponse, BookmarkCollectionCreateMutationVariables>(BOOKMARK_COLLECTION_CREATE_ONE_MUTATION);

  const onCreateBookmarkCollection = async (input: BookmarkCollectionCreateInput) => {
    const newPost = await createBookmarkCollection({
      variables: { input }
    })
    return newPost.data!.bookmarkCollectionCreate;
  }

  return {
    execute: onCreateBookmarkCollection,
    error,
    loading,
    data: data?.bookmarkCollectionCreate,
  }
}