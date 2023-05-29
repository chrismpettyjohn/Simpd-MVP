import { useLazyQuery } from "@apollo/client";
import { CommentReactionFragment } from "../fragments/comment-reaction.fragment";
import { COMMENT_REACTION_FETCH_MANY_QUERY, CommentReactionFetchManyQueryResponse, CommentReactionFetchManyQueryVariables, CommentReactionFilterManyInput } from "../queries/comment-reaction-fetch-many.query";

export interface UseCommentReactionFetchManyQueryResponse {
  fetch(filter: CommentReactionFilterManyInput): Promise<CommentReactionFragment[]>;
  error?: Error;
  loading: boolean;
  data?: CommentReactionFragment[];
}

export function useCommentReactionFetchMany(): UseCommentReactionFetchManyQueryResponse {
  const [getCommentReaction, { loading, error, data, refetch }] = useLazyQuery<CommentReactionFetchManyQueryResponse, CommentReactionFetchManyQueryVariables>(COMMENT_REACTION_FETCH_MANY_QUERY);

  const onFetchCommentReaction = async (filter: CommentReactionFilterManyInput) => {
    if (data) {
      refetch();
    }
    const matchingCommentReactions = await getCommentReaction({ variables: { filter } })
    return matchingCommentReactions.data!.commentReactions;
  }

  return {
    fetch: onFetchCommentReaction,
    error,
    loading,
    data: data?.commentReactions,
  }
}