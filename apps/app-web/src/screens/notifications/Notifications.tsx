import React from 'react'
import './Notifications.css';
import { Helmet } from 'react-helmet'
import { NotificationCard } from 'components/notification-card/NotificationCard';
import { NotificationContainer, NotificationElement } from './Notifications.sty';
import { PageTitle } from 'components/page-title/PageTitle';

export function NotificationsScreen() {
  return (
    <>
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
    </>
  )
}
