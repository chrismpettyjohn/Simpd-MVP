import gql from "graphql-tag";

export const USER_FRAGMENT = gql`
  fragment UserFragment on UserModel {
    id
    email
    isVerified
  }
`

export interface UserFragment {
  id: number;
  email: string;
  isVerified: boolean;
}