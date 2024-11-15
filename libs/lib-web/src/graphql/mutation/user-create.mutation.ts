import gql from "graphql-tag";
import { UserFragment } from "../fragments/user.fragment";

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
  mutation($input: UserCreateInput!) {
    userCreate(
      input: $input
    ) {
      id
    }
  }
`