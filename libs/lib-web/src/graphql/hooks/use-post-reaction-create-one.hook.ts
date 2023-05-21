import { useMutation } from "@apollo/client";
import { PostReactionFragment } from "../fragments/post-reaction.fragment";
import { POST_REACTION_CREATE_MUTATION, PostReactionCreateInput, PostReactionCreateMutationResponse, PostReactionCreateMutationVariables } from "../mutation/post-reaction-create-one.mutation";

export interface UsePostReactionCreateResponse {
  execute(input: PostReactionCreateInput): Promise<PostReactionFragment>;
  error?: Error;
  loading: boolean;
  data?: PostReactionFragment;
}

export function usePostReactionCreate(): UsePostReactionCreateResponse {
  const [createPostReaction, { loading, error, data }] = useMutation<PostReactionCreateMutationResponse, PostReactionCreateMutationVariables>(POST_REACTION_CREATE_MUTATION);

  const onCreatePostReaction = async (input: PostReactionCreateInput) => {
    const newPost = await createPostReaction({
      variables: { input }
    })
    return newPost.data!.postReactionCreate;
  }

  return {
    execute: onCreatePostReaction,
    error,
    loading,
    data: data?.postReactionCreate,
  }
}