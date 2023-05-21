import gql from "graphql-tag";
import { POST_WITH_VIDEO_FRAGMENT, PostWithVideoFragment } from "../fragments/post.fragment";

export interface PostWithVideoCreateInput {
  content: string;
  mediaID: number;
}

export interface PostWithVideoCreateMutationVariables {
  input: PostWithVideoCreateInput;
}

export interface PostWithVideoCreateMutationResponse {
  postWithVideoCreate: PostWithVideoFragment;
}

export const POST_WITH_VIDEO_CREATE_MUTATION = gql`
  ${POST_WITH_VIDEO_FRAGMENT}
  mutation($input: PostWithVideoCreateInput!) {
    postWithVideoCreate(
      input: $input
    ) {
      ...PostWithVideoFragment
    }
  }
`