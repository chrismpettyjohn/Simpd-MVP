import gql from "graphql-tag";
import { PostReactionFilterOneInput } from "graphql/queries/post-reaction-fetch-one.query";

export interface PostReactionDeleteMutationVariables {
  filter: PostReactionFilterOneInput;
}

export interface PostReactionDeleteMutationResponse {
  success: boolean;
}

export const POST_REACTION_DELETE_ONE_MUTATION = gql`
  mutation($filter: PostReactionFilterOneInput!) {
    postReactionDelete(
      filter: $filter
    )
  }
`