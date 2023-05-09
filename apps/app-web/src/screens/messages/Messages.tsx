import './Messages.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from 'components/footer/Footer';
import { SiteHeader } from 'components/site-header/SiteHeader';
import { MessageCard } from 'components/message-card/MessageCard';

export function MessagesScreen() {
  return (
    <div className="messages-container">
      <Helmet>
        <title>Messages - Simpd</title>
        <meta property="og:title" content="Messages - Simpd" />
      </Helmet>
      <SiteHeader />
      <div className="messages-container1">
        <div className="messages-container2">
          <div className="messages-container3">
            <h1 className="messages-text">Messages</h1>
            <input
              type="text"
              placeholder="Search messages"
              className="messages-textinput input"
            />
          </div>
          <div className="messages-container4">
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
