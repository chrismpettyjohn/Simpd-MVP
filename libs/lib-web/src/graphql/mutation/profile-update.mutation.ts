import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "../fragments/profile.fragment";

export interface ProfileUpdateInput {
  username?: string;
  displayName?: string;
  biography?: string;
  location?: string;
  websiteURL?: string;
  wishlistURL?: string;
}

export interface ProfileUpdateMutationVariables {
  profileID?: number;
  username?: number;
  changes?: ProfileUpdateInput;
}

export interface ProfileUpdateMutationResponse {
  profileUpdate: ProfileFragment;
}

export const PROFILE_UPDATE_MUTATION = gql`
  ${PROFILE_FRAGMENT}
  mutation($profileID: Float, $username: String, $changes: ProfileUpdateInput!) {
    profileUpdate(
      filter: {
        id: $profileID
        username: $username
      }
      input: $changes
    ) {
      ...ProfileFragment
    }
  }
`