import gql from "graphql-tag";

export const MESSAGE_FRAGMENT = gql`
  fragment MessageFragment on MessageModel {
    id
  }
`

export interface MessageFragment {
  id: number;
}