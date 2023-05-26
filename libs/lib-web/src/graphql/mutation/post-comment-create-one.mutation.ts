import gql from "graphql-tag";
import { POST_COMMENT_FRAGMENT, PostCommentFragment } from "graphql/fragments/post-comment.fragment";
export interface PostCommentCreateOneInput {
  postID: number;
  comment: string;
}

export interface PostCommentCreateOneMutationVariables {
  input: PostCommentCreateOneInput;
}

export interface PostCommentCreateOneMutationResponse {
  postCommentCreate: PostCommentFragment;
}

export const POST_COMMENT_CREATE_ONE_MUTATION = gql`
  ${POST_COMMENT_FRAGMENT}
  mutation($input: PostCommentCreateOneInput!) {
    postCommentCreate(
      input: $input
    ) {
      success
    }
  }
`