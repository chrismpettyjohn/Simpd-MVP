import gql from "graphql-tag";

export const BASE_POST_FRAGMENT = gql`
  fragment BasePostFragment on BasePostModel {
    id
    profileID
  }
`
export interface BasePostFragment {
  id: number;
  profileID: number;
}