import { useRoute } from 'wouter';
import React, { useEffect } from 'react';
import { Card } from '../../components/card/Card';
import { SendMessageCard } from 'components/send-message-card/SendMessageCard';
import { FullPageLoadingScreen, useMessageFetchMany, useProfileFetchOne } from '@simpd/lib-web';
import { MessageCard } from 'components/message-card/MessageCard';

export function MessageThreadScreen() {
  const profileFetchOne = useProfileFetchOne();
  const messageFetchMany = useMessageFetchMany();

  const [, params] = useRoute<{ username: string }>('/messages/threads/:username');
  const username = params!.username;

  const onLoadProfile = async () => {
    await profileFetchOne.fetch({ username });
  }

  const onLoadMessages = async () => {
    const messagesWithUser = await messageFetchMany.fetch({
      //
    })
  }

  const receivingProfile = profileFetchOne.data;

  useEffect(() => {
    if (!params?.username) {
      return;
    }
    onLoadProfile();
  }, [params?.username]);

  useEffect(() => {
    if (!profileFetchOne.data?.id) {
      return;
    }
    onLoadMessages();
  }, [profileFetchOne.data?.id]);


  if (profileFetchOne.loading || !receivingProfile) {
    return <FullPageLoadingScreen />
  }

  return (
    <Card>
      <div style={{ height: '45vh', overflow: 'hidden', overflowY: 'auto', padding: 8 }}>
        {
          messageFetchMany.data?.map(_ => (
            <MessageCard key={`message_card_${_.id}`} message={_} profile={receivingProfile} />
          ))
        }
      </div>
      <SendMessageCard receivingProfileID={receivingProfile.id} onMessageSent={onLoadMessages} />
    </Card>
  );
}