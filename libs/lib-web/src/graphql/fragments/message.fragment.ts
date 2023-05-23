import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "./profile.fragment";

export const MESSAGE_FRAGMENT = gql`
  ${PROFILE_FRAGMENT}
  fragment MessageFragment on MessageModel {
    id
    content
    sendingProfileID
    sendingProfile {
      ...ProfileFragment
    }
    receivingProfileID
  }
`

export interface MessageFragment {
  id: number;
  content: string;
  sendingProfileID: number;
  sendingProfile: ProfileFragment;
  receivingProfileID: number;
}