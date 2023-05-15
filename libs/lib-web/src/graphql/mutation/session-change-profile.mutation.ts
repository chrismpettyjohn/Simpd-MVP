import gql from "graphql-tag";

export interface SessionChangeProfileMutationVariables {
  profileID: number;
}

export type SessionChangeProfileMutationResponse = string;

export const SESSION_CHANGE_PROFILE_MUTATION = gql`
  mutation($profileID: Float!) {
    sessionChangeProfile(
      input: {
        profileID: $profileID
      }
    )
  }
`