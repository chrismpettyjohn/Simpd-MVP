import gql from "graphql-tag";
import { POST_REACTION_FRAGMENT, PostReactionFragment } from "../fragments/post-reaction.fragment";

export enum ReactionType {
  Like = 'Like',
}


export interface PostReactionCreateInput {
  postID: number;
  reaction: ReactionType;
}

export interface PostReactionCreateMutationVariables {
  input: PostReactionCreateInput;
}

export interface PostReactionCreateMutationResponse {
  postReactionCreate: PostReactionFragment;
}

export const POST_REACTION_CREATE_MUTATION = gql`
  ${POST_REACTION_FRAGMENT}
  mutation($input: PostReactionCreateInput!) {
    postReactionCreate(
      input: $input
    ) {
      ...PostReactionFragment
    }
  }
`