import React from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { UserContainer } from '../../layout/user-container/UserContainer';
import { NotificationContainer, NotificationElement } from './Notifications.sty';
import { NotificationCard } from '../../components/notification-card/NotificationCard';

export function NotificationsScreen() {
  return (
    <UserContainer>
      <NotificationElement>
        <PageTitle title="Notifications" />
        <NotificationContainer>
          <p>
            <b>This page is not implemented.</b></p>
          <NotificationCard />
        </NotificationContainer>
      </NotificationElement>
    </UserContainer>
  )
}
