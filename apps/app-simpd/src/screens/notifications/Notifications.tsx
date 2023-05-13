import React from 'react'
import { Helmet } from 'react-helmet'
import { UserGuard } from '@simpd/lib-web';
import { PageTitle } from 'components/page-title/PageTitle';
import { NotificationCard } from 'components/notification-card/NotificationCard';
import { NotificationContainer, NotificationElement } from './Notifications.sty';

export function NotificationsScreen() {
  return (
    <UserGuard redirect>
      <Helmet>
        <title>Notifications - Simpd</title>
        <meta property="og:title" content="Notifications - Simpd" />
      </Helmet>
      <NotificationElement>
        <PageTitle title="Notifications" />
        <NotificationContainer>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </NotificationContainer>
      </NotificationElement>
    </UserGuard>
  )
}
