import gql from "graphql-tag";
import { COMMENT_REACTION_FRAGMENT, CommentReactionFragment } from "../fragments/comment-reaction.fragment";

export interface CommentReactionFilterManyInput {
  commentIDs?: number[];
  profileIDs?: number[];
}

export interface CommentReactionFetchManyQueryVariables {
  filter: CommentReactionFilterManyInput;
}

export interface CommentReactionFetchManyQueryResponse {
  commentReactions: CommentReactionFragment[];
}

export const COMMENT_REACTION_FETCH_MANY_QUERY = gql`
  ${COMMENT_REACTION_FRAGMENT}
  query($filter: CommentReactionFilterManyInput!) {
    commentReactions(
      filter: $filter
    ) {
      ...CommentReactionFragment
    }
  }
`