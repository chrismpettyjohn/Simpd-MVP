import gql from "graphql-tag";

export interface UserChangePasswordInput {
  currentPassword: string;
  newPassword: string;
  newPasswordAgain: string;
}

export interface UserChangePasswordMutationVariables {
  userID: number;
  input: UserChangePasswordInput;
}

export type UserChangePasswordMutationResponse = string;

export const USER_CHANGE_PASSWORD_MUTATION = gql`
  mutation($userID: Float!, $input: UserChangePasswordInput!) {
    userChangePassword(
      filter: {
        id: $userID
      }
      input: $input
    )
  }
`