import React from 'react'
import './Notifications.css';
import { Helmet } from 'react-helmet'
import { Footer } from 'components/footer/Footer';
import { SiteHeader } from 'components/site-header/SiteHeader';
import { NotificationCard } from 'components/notification-card/NotificationCard';
import { NotificationContainer, NotificationElement } from './Notifications.sty';

export function NotificationsScreen() {
  return (
    <>
      <Helmet>
        <title>Notifications - Simpd</title>
        <meta property="og:title" content="Notifications - Simpd" />
      </Helmet>
      <SiteHeader />
      <NotificationElement>
        <div className="notifications-container2">
          <h1 className="notifications-text">Notifications</h1>
        </div>
        <NotificationContainer>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </NotificationContainer>
      </NotificationElement>
      <Footer />
    </>
  )
}
