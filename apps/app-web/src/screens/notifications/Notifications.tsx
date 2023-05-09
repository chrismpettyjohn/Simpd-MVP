import React from 'react'
import './Notifications.css';
import { Helmet } from 'react-helmet'
import { Footer } from 'components/footer/Footer';
import { SiteHeader } from 'components/site-header/SiteHeader';
import { NotificationCard } from 'components/notification-card/NotificationCard';

export function NotificationsScreen() {
  return (
    <div className="notifications-container">
      <Helmet>
        <title>Notifications - Simpd</title>
        <meta property="og:title" content="Notifications - Simpd" />
      </Helmet>
      <SiteHeader />
      <div className="notifications-container1">
        <div className="notifications-container2">
          <h1 className="notifications-text">Notifications</h1>
        </div>
        <div className="notifications-container3">
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}
