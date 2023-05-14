import gql from "graphql-tag";
import { PROFILE_FRAGMENT, ProfileFragment } from "fragments/profile.fragment";

export interface ProfileCreateInput {
  username: string;
  displayName: string;
  biography: string;
}

export interface ProfileCreateMutationVariables {
  input: ProfileCreateInput;
}

export interface ProfileCreateMutationResponse {
  profileCreate: ProfileFragment;
}

export const PROFILE_CREATE_MUTATION = gql`
  ${PROFILE_FRAGMENT}
  mutation($input: ProfileCreateInput!) {
    profileCreate(
      input: $input
    ) {
      ...ProfileFragment
    }
  }
`