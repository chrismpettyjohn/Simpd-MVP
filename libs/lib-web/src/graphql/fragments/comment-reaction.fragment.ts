import gql from "graphql-tag";
import { ReactionType } from "../../graphql/mutation/post-reaction-create-one.mutation";

export const COMMENT_REACTION_FRAGMENT = gql`
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