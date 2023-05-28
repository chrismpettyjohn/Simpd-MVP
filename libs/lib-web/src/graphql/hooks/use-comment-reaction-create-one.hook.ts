import { useMutation } from "@apollo/client";
import { CommentReactionFragment } from "../fragments/comment-reaction.fragment";
import { COMMENT_REACTION_CREATE_MUTATION, CommentReactionCreateInput, CommentReactionCreateMutationResponse, CommentReactionCreateMutationVariables } from "../mutation/comment-reaction-create-one.mutation";

export interface UseCommentReactionCreateResponse {
  execute(input: CommentReactionCreateInput): Promise<CommentReactionFragment>;
  error?: Error;
  loading: boolean;
  data?: CommentReactionFragment;
}

export function useCommentReactionCreate(): UseCommentReactionCreateResponse {
  const [createCommentReaction, { loading, error, data }] = useMutation<CommentReactionCreateMutationResponse, CommentReactionCreateMutationVariables>(COMMENT_REACTION_CREATE_MUTATION);

  const onCreateCommentReaction = async (input: CommentReactionCreateInput) => {
    const newComment = await createCommentReaction({
      variables: { input }
    })
    return newComment.data!.commentReactionCreate;
  }

  return {
    execute: onCreateCommentReaction,
    error,
    loading,
    data: data?.commentReactionCreate,
  }
}