import gql from "graphql-tag";
import { POST_COMMENT_FRAGMENT } from "graphql/fragments/post-comment.fragment";
import { PostCommentFetchOneInput } from "graphql/queries/post-comment-fetch-one.query";

export interface PostCommentUpdateOneInput {
  comment: string;
}

export interface PostCommentUpdateOneMutationVariables {
  filter: PostCommentFetchOneInput;
  changes: PostCommentUpdateOneInput;
}

export interface PostCommentUpdateOneMutationResponse {
  success: boolean;
}

export const POST_COMMENT_UPDATE_ONE_MUTATION = gql`
  ${POST_COMMENT_FRAGMENT}
  mutation($filter: PostCommentFindOneInput!, $changes: PostCommentUpdateInput!) {
    postCommentUpdate(
      filter: $filter
      input: $changes
    ) {
      success
    }
  }
`