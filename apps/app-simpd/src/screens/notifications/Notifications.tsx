import React from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { UserContainer } from '../../layout/user-container/UserContainer';
import { NotificationContainer } from './Notifications.sty';
import { NotificationCard } from '../../components/notification-card/NotificationCard';

export function NotificationsScreen() {
  return (
    <UserContainer>
      <>
        <PageTitle title="Notifications" />
        <NotificationContainer>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </NotificationContainer>
      </>
    </UserContainer>
  )
}
