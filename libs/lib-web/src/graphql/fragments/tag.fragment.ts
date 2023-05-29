import gql from "graphql-tag";

export const TAG_FRAGMENT = gql`
  fragment TagFragment on TagModel {
    id
    name
  }
`

export interface TagFragment {
  id: number;
  name: string;
}