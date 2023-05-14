import gql from "graphql-tag";

export const PROFILE_FRAGMENT = gql`
  fragment ProfileFragment on ProfileModel {
    id
    userID
    username
    displayName
    biography
    location
    websiteURL
    wishlistURL
  }
`

export interface ProfileFragment {
  id: number;
  userID: number;
  username: string;
  displayName: string;
  biography: string;
  location: string;
  websiteURL: string;
  wishlistURL: string;
}