import gql from "graphql-tag";

export const SESSION_FRAGMENT = gql`
  fragment SessionFragment on SessionModel {
    id
    userID
    profileID
  }
`

export interface SessionFragment {
  id: number;
  userID: number;
  profileID: number;
}