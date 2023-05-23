import './Messages.css';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import { MessagesContainer } from './Messages.sty';
import { Button } from '../../components/button/Button';
import { PageTitle } from '../../components/page-title/PageTitle';
import { FullPageLoadingScreen, useMessageContactFetchMany } from '@simpd/lib-web';
import { MessagePreviewCard } from 'components/message-preview-card/MessagePreviewCard';
import { Card } from 'components/card/Card';

export function MessagesScreen() {
  const messageContactFetchMany = useMessageContactFetchMany();

  useEffect(() => {
    messageContactFetchMany.fetch();
  }, []);

  if (messageContactFetchMany.loading) {
    return <FullPageLoadingScreen />;
  }

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
      <Card>
        {
          messageContactFetchMany.data?.map(_ => (
            <MessagePreviewCard key={`message_contact_${_.profileID}`} messageContact={_} />
          ))
        }
        {
          !messageContactFetchMany.data?.length && (
            <p style={{ fontSize: '1.18rem', color: 'white' }}>No messages to display.</p>
          )
        }
      </Card>
    </>
  )
}
