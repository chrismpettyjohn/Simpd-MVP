import { useMutation } from "@apollo/client";
import { BookmarkFragment } from "../fragments/bookmark.fragment";
import { BOOKMARK_CREATE_ONE_MUTATION, BookmarkCreateInput, BookmarkCreateMutationResponse, BookmarkCreateMutationVariables } from "../mutation/bookmark-create-one.mutation";

export interface UseBookmarkCreateResponse {
  execute(input: BookmarkCreateInput): Promise<BookmarkFragment>;
  error?: Error;
  loading: boolean;
  data?: BookmarkFragment;
}

export function useBookmarkCreate(): UseBookmarkCreateResponse {
  const [createBookmark, { loading, error, data }] = useMutation<BookmarkCreateMutationResponse, BookmarkCreateMutationVariables>(BOOKMARK_CREATE_ONE_MUTATION);

  const onCreateBookmark = async (input: BookmarkCreateInput) => {
    const newPost = await createBookmark({
      variables: { input }
    })
    return newPost.data!.bookmarkCreate;
  }

  return {
    execute: onCreateBookmark,
    error,
    loading,
    data: data?.bookmarkCreate,
  }
}