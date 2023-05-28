import gql from "graphql-tag";
import { COMMENT_REACTION_FRAGMENT, CommentReactionFragment } from "../fragments/comment-reaction.fragment";

export interface CommentReactionFilterOneInput {
  commentID?: number;
  profileID?: number;
}

export interface CommentReactionFetchOneQueryVariables {
  filter: CommentReactionFilterOneInput;
}

export interface CommentReactionFetchOneQueryResponse {
  commentReaction: CommentReactionFragment;
}

export const COMMENT_REACTION_FETCH_ONE_QUERY = gql`
  ${COMMENT_REACTION_FRAGMENT}
  query($filter: CommentReactionFilterOneInput!) {
    commentReaction(
      filter: $filter
    ) {
      ...CommentReactionFragment
    }
  }
`