import gql from "graphql-tag";
import { POST_COMMENT_FRAGMENT } from "graphql/fragments/post-comment.fragment";
import { PostCommentFetchOneInput } from "graphql/queries/post-comment-fetch-one.query";

export interface PostCommentDeleteOneMutationVariables {
  filter: PostCommentFetchOneInput;
}

export interface PostCommentDeleteOneMutationResponse {
  success: boolean;
}

export const POST_COMMENT_DELETE_ONE_MUTATION = gql`
  ${POST_COMMENT_FRAGMENT}
  mutation($filter: PostCommentFindOneInput!) {
    postCommentDelete(
      filter: $filter
    ) {
      success
    }
  }
`