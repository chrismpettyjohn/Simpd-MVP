import { useLazyQuery } from "@apollo/client";
import { NotificationFragment } from "../fragments/notification.fragment";
import { NOTIFICATION_FETCH_MANY_QUERY, NotificationFetchManyQueryInput, NotificationFetchManyQueryResponse, NotificationFetchManyQueryVariables } from "../queries/notification-fetch-many.query";

export interface UseNotificationFetchManyQueryResponse {
  fetch(filter: NotificationFetchManyQueryInput): Promise<NotificationFragment[]>;
  error?: Error;
  loading: boolean;
  data?: NotificationFragment[];
}

export function useNotificationFetchMany(): UseNotificationFetchManyQueryResponse {
  const [getNotification, { loading, error, data, refetch }] = useLazyQuery<NotificationFetchManyQueryResponse, NotificationFetchManyQueryVariables>(NOTIFICATION_FETCH_MANY_QUERY);

  const onFetchNotification = async (filter: NotificationFetchManyQueryInput) => {
    if (data) {
      await refetch();
    }
    const matchingNotifications = await getNotification({ variables: { filter } })
    return matchingNotifications.data!.notifications;
  }

  return {
    fetch: onFetchNotification,
    error,
    loading,
    data: data?.notifications,
  }
}