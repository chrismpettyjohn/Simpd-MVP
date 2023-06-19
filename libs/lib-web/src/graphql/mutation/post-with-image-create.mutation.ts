import gql from "graphql-tag";
import { POST_WITH_IMAGE_FRAGMENT, PostWithImageFragment } from "../fragments/post.fragment";

export interface PostWithImageCreateInput {
  content: string;
  tagIDs?: number[];
  mediaID: number;
}

export interface PostWithImageCreateMutationVariables {
  input: PostWithImageCreateInput;
}

export interface PostWithImageCreateMutationResponse {
  postWithImageCreate: PostWithImageFragment;
}

export const POST_WITH_IMAGE_CREATE_MUTATION = gql`
  ${POST_WITH_IMAGE_FRAGMENT}
  mutation($input: PostWithImageCreateInput!) {
    postWithImageCreate(
      input: $input
    ) {
      ...PostWithImageFragment
    }
  }
`