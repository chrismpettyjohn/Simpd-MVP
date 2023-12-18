import { useRoute } from 'wouter';
import React, { useContext, useEffect } from 'react';
import { MessageCard } from 'components/message-card/MessageCard';
import { SendMessageCard } from 'components/send-message-card/SendMessageCard';
import { FullPageLoadingScreen, sessionContext, useMessageFetchMany, useProfileFetchOne } from '@simpd/lib-web';
import { MessageContainer } from 'layout/message-container/MessageContainer';

export function MessageThreadScreen() {
  const { session } = useContext(sessionContext);
  const profileFetchOne = useProfileFetchOne();
  const messageFetchMany = useMessageFetchMany();

  const [, params] = useRoute<{ username: string }>('/messages/threads/:username');
  const username = params!.username;

  const onLoadProfile = async () => {
    await profileFetchOne.fetch({ username });
  }

  const onLoadMessages = async () => {
    if (!profileFetchOne.data?.id) {
      return;
    }
    const messagesWithUser = await messageFetchMany.fetch({
      receivingProfileID: profileFetchOne.data.id
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
    <MessageContainer profile={profileFetchOne.data}>
      {
        messageFetchMany.data?.map(_ => (
          <MessageCard key={`message_card_${_.id}`} message={_} profile={_.sendingProfileID === session?.profileID ? session.profile : _.sendingProfile} />
        ))
      }
      <SendMessageCard receivingProfileID={receivingProfile.id} onMessageSent={onLoadMessages} />
    </MessageContainer>
  );
}