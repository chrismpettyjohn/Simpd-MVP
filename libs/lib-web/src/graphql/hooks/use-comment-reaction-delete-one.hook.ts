import { useMutation } from "@apollo/client";
import { CommentReactionFilterOneInput } from "../queries/comment-reaction-fetch-one.query";
import { COMMENT_REACTION_DELETE_ONE_MUTATION, CommentReactionDeleteMutationResponse, CommentReactionDeleteMutationVariables } from "../mutation/comment-reaction-delete-one.mutation";

export interface UseCommentReactionDeleteResponse {
  execute(filter: CommentReactionFilterOneInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useCommentReactionDelete(): UseCommentReactionDeleteResponse {
  const [deleteCommentReaction, { loading, error, data }] = useMutation<CommentReactionDeleteMutationResponse, CommentReactionDeleteMutationVariables>(COMMENT_REACTION_DELETE_ONE_MUTATION);

  const onDeleteCommentReaction = async (filter: CommentReactionFilterOneInput) => {
    const newComment = await deleteCommentReaction({
      variables: { filter }
    })
    return newComment.data!.success;
  }

  return {
    execute: onDeleteCommentReaction,
    error,
    loading,
    data: data?.success ?? undefined,
  }
}