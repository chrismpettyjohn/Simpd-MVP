import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "./profile.fragment";

export const POST_WITH_TEXT_FRAGMENT = gql`
  ${PROFILE_FRAGMENT}
  fragment PostWithTextFragment on PostWithTextModel {
    id
    type
    profileID
    profile {
      ...ProfileFragment,
    }
    content
  }
`

export enum PostType {
  Text = 'Text',
  Image = 'Image',
  Video = 'Video',
  Album = 'Album',
  SharedContent = 'shared_content',
}

export interface PostWithTextFragment {
  id: number;
  type: PostType.Text;
  profileID: number;
  profile: ProfileFragment;
  content: string;
}

export type PostFragment = PostWithTextFragment;