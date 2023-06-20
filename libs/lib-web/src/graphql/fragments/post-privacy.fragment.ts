import gql from "graphql-tag";
import { PRIVACY_FRAGMENT, PrivacyFragment } from "./privacy.fragment";

export const POST_PRIVACY_FRAGMENT = gql`
  ${PRIVACY_FRAGMENT}
  fragment PostPrivacyFragment on PostPrivacyModel {
    id
    postID
    privacy {
      ...PrivacyFragment
    }
  }
`

export interface PostPrivacyFragment {
  id: number;
  postID: number;
  privacy: PrivacyFragment;
}