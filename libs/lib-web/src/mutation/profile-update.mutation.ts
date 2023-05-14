import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "fragments/profile.fragment";

export interface ProfileUpdateMutationVariables {
  id?: number;
  username?: number;
}

export type ProfileUpdateMutationResponse = ProfileFragment;

export const PROFILE_UPDATE_MUTATION = gql`
  ${PROFILE_FRAGMENT}
  mutation($profileID: Float, $username: String, $input: ProfileUpdateInput!) {
    profileUpdate(
      filter: {
        id: $profileID
        username: $username
      }
      input: $input
    ) {
      ...ProfileFragment
    }
  }
`