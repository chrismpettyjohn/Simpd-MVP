import gql from "graphql-tag";
import { USER_FRAGMENT, UserFragment } from "graphql/fragments/user.fragment";

export interface UserCreateInput {
  email: string;
  password: string;
}

export interface UserCreateMutationVariables {
  input: UserCreateInput;
}

export interface UserCreateMutationResponse {
  userCreate: UserFragment;
}

export const USER_CREATE_MUTATION = gql`
  ${USER_FRAGMENT}
  mutation($input: UserCreateInput!) {
    userCreate(
      input: $input
    ) {
      ...UserFragment
    }
  }
`