import { useLazyQuery } from "@apollo/client";
import { CommentReactionFragment } from "../fragments/comment-reaction.fragment";
import { COMMENT_REACTION_FETCH_ONE_QUERY, CommentReactionFetchOneQueryResponse, CommentReactionFetchOneQueryVariables } from "../queries/comment-reaction-fetch-one.query";

export interface UseCommentReactionFetchOneQueryResponse {
  fetch(filter: CommentReactionFetchOneQueryVariables): Promise<CommentReactionFragment>;
  error?: Error;
  loading: boolean;
  data?: CommentReactionFragment;
}

export function useCommentReactionFetchOne(): UseCommentReactionFetchOneQueryResponse {
  const [getCommentReaction, { loading, error, data }] = useLazyQuery<CommentReactionFetchOneQueryResponse, CommentReactionFetchOneQueryVariables>(COMMENT_REACTION_FETCH_ONE_QUERY);

  const onFetchCommentReaction = async (filter: CommentReactionFetchOneQueryVariables) => {
    const matchingCommentReactions = await getCommentReaction({ variables: filter })
    return matchingCommentReactions.data!.commentReaction;
  }

  return {
    fetch: onFetchCommentReaction,
    error,
    loading,
    data: data?.commentReaction,
  }
}