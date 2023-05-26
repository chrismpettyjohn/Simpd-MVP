import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "./profile.fragment";

export const POST_COMMENT_FRAGMENT = gql`
  ${PROFILE_FRAGMENT}
  fragment PostCommentFragment on PostCommentModel {
    id
    postID
    profileID
    profile {
      ...ProfileFragment
    }
    content
  }
`

export interface PostCommentFragment {
  id: number;
  postID: number;
  profileID: number;
  profile: ProfileFragment;
  content: string;
}