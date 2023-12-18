import { Link } from 'wouter';
import React, { useEffect } from 'react';
import { PageTitle } from '../../components/page-title/PageTitle';
import { UserContainer } from '../../layout/user-container/UserContainer';
import { FullPageLoadingScreen, useMessageContactFetchMany } from '@simpd/lib-web';
import { MessagePreviewCard } from 'components/message-preview-card/MessagePreviewCard';

export function MessagesScreen() {
  const messageContactFetchMany = useMessageContactFetchMany();

  useEffect(() => {
    messageContactFetchMany.fetch();
  }, []);

  if (messageContactFetchMany.loading) {
    return <FullPageLoadingScreen />;
  }

  return (
    <UserContainer>
      <PageTitle title="Messages" />
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>

        <h1>Messages</h1>
        <Link to="/messages/create">
          <i className="fa fa-pen-square fa-2x" style={{ cursor: 'pointer' }} />
        </Link>
      </div>
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
    </UserContainer>
  )
}
