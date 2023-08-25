import gql from "graphql-tag";
import { NOTIFICATION_FRAGMENT, NotificationFragment } from "../fragments/notification.fragment";

export interface NotificationFetchOneQueryVariables {
  id: number[];
}

export interface NotificationFetchOneQueryResponse {
  notification: NotificationFragment;
}

export const NOTIFICATION_FETCH_ONE_QUERY = gql`
  ${NOTIFICATION_FRAGMENT}
  query($id: Float) {
    notification(
      filter: {
        id: $id
      }
    ) {
      ...NotificationFragment
    }
  }
`