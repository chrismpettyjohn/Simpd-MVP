import gql from "graphql-tag";
import { COMMENT_REACTION_FRAGMENT, CommentReactionFragment } from "../fragments/comment-reaction.fragment";

export enum ReactionType {
  Like = 'Like',
}


export interface CommentReactionCreateInput {
  commentID: number;
  reaction: ReactionType;
}

export interface CommentReactionCreateMutationVariables {
  input: CommentReactionCreateInput;
}

export interface CommentReactionCreateMutationResponse {
  commentReactionCreate: CommentReactionFragment;
}

export const COMMENT_REACTION_CREATE_MUTATION = gql`
  ${COMMENT_REACTION_FRAGMENT}
  mutation($input: CommentReactionCreateInput!) {
    commentReactionCreate(
      input: $input
    ) {
      ...CommentReactionFragment
    }
  }
`