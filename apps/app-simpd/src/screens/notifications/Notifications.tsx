import React from 'react'
import { Helmet } from 'react-helmet'
import { PageTitle } from '../../components/page-title/PageTitle';
import { NotificationCard } from '../../components/notification-card/NotificationCard';
import { NotificationContainer, NotificationElement } from './Notifications.sty';

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
          <p>
            <b>This page is not implemented.</b></p>
          <NotificationCard />
        </NotificationContainer>
      </NotificationElement>
    </>
  )
}
