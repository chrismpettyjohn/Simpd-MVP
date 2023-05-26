import gql from "graphql-tag";

export const POST_COMMENT_FRAGMENT = gql`
  fragment PostCommentFragment on PostCommentModel {
    id
    postID
    profileID
    comment
  }
`

export interface PostCommentFragment {
  id: number;
  postID: number;
  profileID: number;
  comment: string;
}