import gql from "graphql-tag";

export const MESSAGE_FRAGMENT = gql`
  fragment MessageFragment on FragmentModel {
    id
  }
`

export interface MessageFragment {
  id: number;
}