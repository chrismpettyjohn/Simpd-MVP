import gql from "graphql-tag";
import { USER_FRAGMENT, UserFragment } from "./user.fragment";
import { PROFILE_FRAGMENT, ProfileFragment } from "./profile.fragment";

export const SESSION_FRAGMENT = gql`
  ${USER_FRAGMENT}
  ${PROFILE_FRAGMENT}
  fragment SessionFragment on SessionModel {
    id
    userID
    user {
      ...UserFragment
    }
    profileID
    profile {
      ...ProfileFragment
    }
  }
`

export interface SessionFragment {
  id: number;
  userID: number;
  user: UserFragment;
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
