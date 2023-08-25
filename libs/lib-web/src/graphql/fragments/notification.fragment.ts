import gql from "graphql-tag";

export const NOTIFICATION_FRAGMENT = gql`
  fragment MessageFragment on MessageModel {
    id
    content
    profileID
    resourceID
    resourceType
    readAt
  }
`

export interface NotificationFragment {
  id: number;
  profileID: number;
  resourceID: number;
  resourceType: string;
  content: string;
  readAt?: string;
}