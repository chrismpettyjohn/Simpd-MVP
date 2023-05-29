import gql from "graphql-tag";
import { ReactionType } from "../mutation/post-reaction-create-one.mutation";

export const MESSAGE_REACTION_FRAGMENT = gql`
  fragment MessageReactionFragment on MessageReactionModel {
    id
    messageID
    profileID
    reaction
  }
`

export interface MessageReactionFragment {
  id: number;
  messageID: number;
  profileID: number;
  reaction: ReactionType;
}