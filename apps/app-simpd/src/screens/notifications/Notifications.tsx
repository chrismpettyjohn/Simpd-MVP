import React, { useEffect } from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { UserContainer } from '../../layout/user-container/UserContainer';
import { NotificationContainer } from './Notifications.sty';
import { NotificationCard } from '../../components/notification-card/NotificationCard';
import { useNotificationFetchMany } from '@simpd/lib-web';

export function NotificationsScreen() {
  const notifications = useNotificationFetchMany();

  useEffect(() => {
    notifications.fetch({});
  }, []);

  return (
    <UserContainer>
      <>
        <PageTitle title="Notifications" />
        <h1>Notifications</h1>
        <NotificationContainer>
          {
            notifications.data?.map(_ => (

              <NotificationCard key={`notification_${_.id}`} notification={_} />
            ))
          }
        </NotificationContainer>
      </>
    </UserContainer>
  )
}
