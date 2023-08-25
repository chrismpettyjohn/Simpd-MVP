import gql from "graphql-tag";
import { NOTIFICATION_FRAGMENT, NotificationFragment } from "../fragments/notification.fragment";

export interface NotificationFetchManyQueryInput {
  ids?: number[];
}

export interface NotificationFetchManyQueryVariables {
  filter: NotificationFetchManyQueryInput;
}

export interface NotificationFetchManyQueryResponse {
  notifications: NotificationFragment[];
}

export const NOTIFICATION_FETCH_MANY_QUERY = gql`
  ${NOTIFICATION_FRAGMENT}
  query($filter: NotificationFilterByManyInput!) {
    notifications(
      filter: $filter
    ) {
      ...NotificationFragment
    }
  }
`