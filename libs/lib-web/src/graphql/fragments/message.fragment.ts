import gql from "graphql-tag";

export const MESSAGE_FRAGMENT = gql`
  fragment MessageFragment on MessageModel {
    id
    content
    sendingProfileID
    receivingProfileID
  }
`

export interface MessageFragment {
  id: number;
  content: string;
  sendingProfileID: number;
  receivingProfileID: number;
}