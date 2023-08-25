import { useLazyQuery } from "@apollo/client";
import { NotificationFragment } from "../fragments/notification.fragment";
import { NOTIFICATION_FETCH_ONE_QUERY, NotificationFetchOneQueryResponse, NotificationFetchOneQueryVariables } from "../queries/notification-fetch-one.query";

export interface UseNotificationFetchOneQueryResponse {
  fetch(filter: NotificationFetchOneQueryVariables): Promise<NotificationFragment>;
  error?: Error;
  loading: boolean;
  data?: NotificationFragment;
}

export function useNotificationFetchOne(): UseNotificationFetchOneQueryResponse {
  const [getNotification, { loading, error, data }] = useLazyQuery<NotificationFetchOneQueryResponse, NotificationFetchOneQueryVariables>(NOTIFICATION_FETCH_ONE_QUERY);

  const onFetchNotification = async (filter: NotificationFetchOneQueryVariables) => {
    const matchingNotifications = await getNotification({ variables: filter })
    return matchingNotifications.data!.notification;
  }

  return {
    fetch: onFetchNotification,
    error,
    loading,
    data: data?.notification,
  }
}