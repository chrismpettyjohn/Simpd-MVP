import gql from "graphql-tag";
import { ReactionType } from "../mutation/comment-reaction-create-one.mutation";

export const POST_REACTION_FRAGMENT = gql`
  fragment CommentReactionFragment on CommentReactionModel {
    id
    commentID
    profileID
    reaction
  }
`

export interface CommentReactionFragment {
  id: number;
  commentID: number;
  profileID: number;
  reaction: ReactionType;
}