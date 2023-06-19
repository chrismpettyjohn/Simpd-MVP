import gql from "graphql-tag";
import { POST_WITH_TEXT_FRAGMENT, PostWithTextFragment } from "../fragments/post.fragment";

export interface PostWithTextCreateInput {
  content: string;
  tagIDs?: number[];
}

export interface PostWithTextCreateMutationVariables {
  input: PostWithTextCreateInput;
}

export interface PostWithTextCreateMutationResponse {
  postWithTextCreate: PostWithTextFragment;
}

export const POST_WITH_TEXT_CREATE_MUTATION = gql`
  ${POST_WITH_TEXT_FRAGMENT}
  mutation($input: PostWithTextCreateInput!) {
    postWithTextCreate(
      input: $input
    ) {
      ...PostWithTextFragment
    }
  }
`