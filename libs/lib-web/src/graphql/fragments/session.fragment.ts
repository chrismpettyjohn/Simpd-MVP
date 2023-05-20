import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "./profile.fragment";

export const SESSION_FRAGMENT = gql`
  ${PROFILE_FRAGMENT}
  fragment SessionFragment on SessionModel {
    id
    userID
    profileID
    profile {
      ...ProfileFragment
    }
  }
`

export interface SessionFragment {
  id: number;
  userID: number;
  profileID: number;
  profile: ProfileFragment;
}

export interface RoleScopesWire {
  profileCreate: boolean;
  bypassUserPrivacy: boolean;
}

export interface SessionContents {
  userID: number;
  profileID: number;
  sessionID: number;
  expiresAt: number;
  scopes: RoleScopesWire;
}
