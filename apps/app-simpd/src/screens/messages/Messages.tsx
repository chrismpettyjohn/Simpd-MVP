import './Messages.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { UserGuard } from '@simpd/lib-web';
import { MessagesContainer } from './Messages.sty';
import { PageTitle } from 'components/page-title/PageTitle';
import { MessageCard } from 'components/message-card/MessageCard';

export function MessagesScreen() {
  return (
    <UserGuard redirect>
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
    </UserGuard>
  )
}
