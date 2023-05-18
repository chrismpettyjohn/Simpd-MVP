import gql from "graphql-tag";
import { PostWithTextFragment } from "graphql/fragments/post.fragment";

export interface PostWithTextCreateInput {
  content: string;
}

export interface PostWithTextCreateMutationVariables {
  input: PostWithTextCreateInput;
}

export interface PostWithTextCreateMutationResponse {
  postWithTextCreate: PostWithTextFragment;
}

export const POST_WITH_TEXT_CREATE_MUTATION = gql`
  mutation($input: PostWithTextCreateInput!) {
    postWithTextCreate(
      input: $input
    ) {
      id
      profileID
    }
  }
`