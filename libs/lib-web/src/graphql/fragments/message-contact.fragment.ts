import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "./profile.fragment";

export const MESSAGE_CONTACT_FRAGMENT = gql`
  ${PROFILE_FRAGMENT}
  fragment MessageContactFragment on MessageContactModel {
    profileID
    profile {
      ...ProfileFragment
    }
  }
`

export interface MessageContactFragment {
  profileID: number;
  profile: ProfileFragment;
}