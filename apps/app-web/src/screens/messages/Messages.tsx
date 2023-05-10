import './Messages.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { MessageCard } from 'components/message-card/MessageCard';
import { MessagesContainer, MessagesPageHeader } from './Messages.sty';

export function MessagesScreen() {
  return (
    <>
      <Helmet>
        <title>Messages - Simpd</title>
        <meta property="og:title" content="Messages - Simpd" />
      </Helmet>
      <MessagesPageHeader>
        <h1 className="messages-text">Messages</h1>
        <input
          type="text"
          placeholder="Search messages"
          className="messages-textinput input"
        />
      </MessagesPageHeader>
      <MessagesContainer>
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </MessagesContainer>
    </>
  )
}
