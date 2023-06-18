import gql from "graphql-tag";

export const TIP_FRAGMENT = gql`
  fragment TipFragment on TipModel {
    id
  }
`

export interface TipFragment {
  id: number;
}