import gql from "graphql-tag";
import { POST_COMMENT_FRAGMENT, PostCommentFragment } from "../../graphql/fragments/post-comment.fragment";

export interface PostCommentFetchManyInput {
  ids?: number[];
  profileIDs?: number[];
}

export interface PostCommentFetchManyQueryVariables {
  filter: PostCommentFetchManyInput
}

export interface PostCommentFetchManyQueryResponse {
  postComments: PostCommentFragment[];
}

export const POST_COMMENT_FETCH_MANY_QUERY = gql`
  ${POST_COMMENT_FRAGMENT}
  query($filter: PostCommentFilterManyInput!) {
    postComments(
      filter: $filter
    ) {
      ...PostCommentFragment
    }
  }
`