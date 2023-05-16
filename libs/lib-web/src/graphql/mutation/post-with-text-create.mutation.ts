import gql from "graphql-tag";
import { BASE_POST_FRAGMENT, BasePostFragment } from "graphql/fragments/post.fragment";

export interface PostWithTextCreateInput {
  content: string;
}

export interface PostWithTextCreateMutationVariables {
  input: PostWithTextCreateInput;
}

export interface PostWithTextCreateMutationResponse {
  postWithTextCreate: BasePostFragment;
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