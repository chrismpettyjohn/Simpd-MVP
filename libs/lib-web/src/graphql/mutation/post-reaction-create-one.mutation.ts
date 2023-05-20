import gql from "graphql-tag";
import { POST_REACTION_FRAGMENT, PostReactionFragment } from "graphql/fragments/post-reaction.fragment";

export enum ReactionType {
  Like = 'like',
}


export interface PostReactionCreateInput {
  postID: number;
  reaction: ReactionType;
}

export interface PostReactionCreateMutationVariables {
  input: PostReactionCreateInput;
}

export interface PostReactionCreateMutationResponse {
  messageCreate: PostReactionFragment;
}

export const POST_REACTION_CREATE_MUTATION = gql`
  ${POST_REACTION_FRAGMENT}
  mutation($input: MessageCreateInput!) {
    messageCreate(
      input: $input
    ) {
      ...MessageFragment
    }
  }
`