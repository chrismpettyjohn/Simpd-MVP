import React from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { NotificationCard } from '../../components/notification-card/NotificationCard';
import { NotificationContainer, NotificationElement } from './Notifications.sty';

export function NotificationsScreen() {
  return (
    <>
      <NotificationElement>
        <PageTitle title="Notifications" />
        <NotificationContainer>
          <p>
            <b>This page is not implemented.</b></p>
          <NotificationCard />
        </NotificationContainer>
      </NotificationElement>
    </>
  )
}
