import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "fragments/profile.fragment";

export interface ProfileCreateRandomizedMutationResponse {
  profileCreateRandomized: ProfileFragment;
}

export const PROFILE_CREATE_RANDOMIZED_MUTATION = gql`
  ${PROFILE_FRAGMENT}
  mutation($input: ProfileCreateInput!) {
    profileCreateRandomized{
      ...ProfileFragment
    }
  }
`