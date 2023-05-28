import gql from "graphql-tag";
import { CommentReactionFilterOneInput } from "../queries/comment-reaction-fetch-one.query";

export interface CommentReactionDeleteMutationVariables {
  filter: CommentReactionFilterOneInput;
}

export interface CommentReactionDeleteMutationResponse {
  success: boolean;
}

export const COMMENT_REACTION_DELETE_ONE_MUTATION = gql`
  mutation($filter: CommentReactionFilterOneInput!) {
    commentReactionDelete(
      filter: $filter
    )
  }
`