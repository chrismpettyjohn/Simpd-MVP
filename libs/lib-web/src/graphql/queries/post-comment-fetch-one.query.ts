import gql from "graphql-tag";
import { POST_COMMENT_FRAGMENT, PostCommentFragment } from "../../graphql/fragments/post-comment.fragment";

export interface PostCommentFetchOneInput {
  id?: number;
  profileID?: number;
}

export interface PostCommentFetchOneQueryVariables {
  filter: PostCommentFetchOneInput
}

export interface PostCommentFetchOneQueryResponse {
  postComment: PostCommentFragment;
}

export const POST_COMMENT_FETCH_ONE_QUERY = gql`
  ${POST_COMMENT_FRAGMENT}
  query($filter: PostCommentFindOneInput!) {
    postComment(
      filter: $filter
    ) {
      ...PostCommentFragment
    }
  }
`