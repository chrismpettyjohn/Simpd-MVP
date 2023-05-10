import './Messages.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { MessageCard } from 'components/message-card/MessageCard';
import { MessagesContainer } from './Messages.sty';
import { PageTitle } from 'components/page-title/PageTitle';

export function MessagesScreen() {
  return (
    <>
      <Helmet>
        <title>Messages - Simpd</title>
        <meta property="og:title" content="Messages - Simpd" />
      </Helmet>
      <PageTitle title="Messages">
        <input
          type="text"
          placeholder="Search messages"
          className="messages-textinput input"
        />
      </PageTitle>
      <MessagesContainer>
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </MessagesContainer>
    </>
  )
}
