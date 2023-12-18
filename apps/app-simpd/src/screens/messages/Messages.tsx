import React, { useEffect } from 'react';
import { PageTitle } from '../../components/page-title/PageTitle';
import { FullPageLoadingScreen, useMessageContactFetchMany } from '@simpd/lib-web';
import { MessagePreviewCard } from 'components/message-preview-card/MessagePreviewCard';
import { MessageContainer } from 'layout/message-container/MessageContainer';

export function MessagesScreen() {
  const messageContactFetchMany = useMessageContactFetchMany();

  useEffect(() => {
    messageContactFetchMany.fetch();
  }, []);

  if (messageContactFetchMany.loading) {
    return <FullPageLoadingScreen />;
  }

  return (
    <MessageContainer>
      <PageTitle title="Messages" />
      <h1>Messages</h1>
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
    </MessageContainer>
  )
}
