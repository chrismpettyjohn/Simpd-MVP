import './Messages.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { MessagesContainer } from './Messages.sty';
import { PageTitle } from 'components/page-title/PageTitle';
import { MessageCard } from 'components/message-card/MessageCard';
import { Button } from 'components/button/Button';
import { Link } from 'wouter';

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
          style={{ width: '75%' }}
        />
        <Link to="/messages/create">
          <Button>
            <i className="fa fa-plus-circle" style={{ marginRight: 8 }} />
            Message
          </Button>
        </Link>
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
