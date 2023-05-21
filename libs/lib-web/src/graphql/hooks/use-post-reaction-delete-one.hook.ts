import { useMutation } from "@apollo/client";
import { PostReactionFilterOneInput } from "graphql/queries/post-reaction-fetch-one.query";
import { POST_REACTION_DELETE_ONE_MUTATION, PostReactionDeleteMutationResponse, PostReactionDeleteMutationVariables } from "graphql/mutation/post-reaction-delete-one.mutation";

export interface UsePostReactionDeleteResponse {
  execute(filter: PostReactionFilterOneInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function usePostReactionDelete(): UsePostReactionDeleteResponse {
  const [deletePostReaction, { loading, error, data }] = useMutation<PostReactionDeleteMutationResponse, PostReactionDeleteMutationVariables>(POST_REACTION_DELETE_ONE_MUTATION);

  const onDeletePostReaction = async (filter: PostReactionFilterOneInput) => {
    const newPost = await deletePostReaction({
      variables: { filter }
    })
    return newPost.data!.success;
  }

  return {
    execute: onDeletePostReaction,
    error,
    loading,
    data: data?.success ?? undefined,
  }
}