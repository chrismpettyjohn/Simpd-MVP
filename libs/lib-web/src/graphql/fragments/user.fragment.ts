import gql from "graphql-tag";

export const USER_FRAGMENT = gql`
  fragment UserFragment on UserModel {
    id
    email
  }
`

export interface UserFragment {
  id: number;
  email: string;
}