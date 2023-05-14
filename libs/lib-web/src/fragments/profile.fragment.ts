import gql from "graphql-tag";

export const PROFILE_FRAGMENT = gql`
  fragment ProfileFragment on ProfileModel {
    id
    userID
    username
  }
`

export interface ProfileFragment {
  id: number;
  userID: number;
  username: string;
}