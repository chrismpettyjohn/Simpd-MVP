import gql from "graphql-tag";
import { ReactionType } from "graphql/mutation/post-reaction-create-one.mutation";

export const POST_REACTION_FRAGMENT = gql`
  fragment PostReactionFragment on PostReactionModel {
    id
    postID
    profileID
    reaction
  }
`

export interface PostReactionFragment {
  id: number;
  postID: number;
  profileID: number;
  reaction: ReactionType;
}