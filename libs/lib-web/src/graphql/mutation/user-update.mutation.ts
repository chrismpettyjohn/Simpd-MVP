import gql from "graphql-tag";
import { UserFragment } from "../fragments/user.fragment";
import { UserFetchOneQueryVariables } from "../queries/user-fetch-one.query";

export interface UserUpdateInput {
  email: string;
  password: string;
}

export interface UserUpdateMutationVariables {
  filter: UserFetchOneQueryVariables;
  input: UserUpdateInput;
}

export interface UserUpdateMutationResponse {
  userUpdate: UserFragment;
}

export const USER_UPDATE_MUTATION = gql`
  mutation($filter: UserFindOneInput!, $input: UserUpdateInput!) {
    userUpdate(
      filter: $filter,
      input: $input
    ) {
      id
    }
  }
`