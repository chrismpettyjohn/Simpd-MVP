import gql from "graphql-tag";
import { POST_WITH_SHARED_CONTENT_FRAGMENT, PostWithSharedContentFragment } from "../fragments/post.fragment";

export interface PostWithSharedContentCreateInput {
  content: string;
  tagIDs: number[];
  postID: number;
}

export interface PostWithSharedContentCreateMutationVariables {
  input: PostWithSharedContentCreateInput;
}

export interface PostWithSharedContentCreateMutationResponse {
  postWithSharedContentCreate: PostWithSharedContentFragment;
}

export const POST_WITH_SHARED_CONTENT_CREATE_MUTATION = gql`
  ${POST_WITH_SHARED_CONTENT_FRAGMENT}
  mutation($input: PostWithSharedContentInput!) {
    postWithSharedContentCreate(
      input: $input
    ) {
      ...PostWithSharedContentFragment
    }
  }
`