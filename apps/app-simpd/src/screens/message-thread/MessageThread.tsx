import { useRoute } from 'wouter';
import { Card } from '../../components/card/Card';
import React, { useContext, useEffect } from 'react';
import { MessageCard } from 'components/message-card/MessageCard';
import { SendMessageCard } from 'components/send-message-card/SendMessageCard';
import { UserContainer } from '../../layout/user-container/UserContainer';
import { FullPageLoadingScreen, sessionContext, useMessageFetchMany, useProfileFetchOne } from '@simpd/lib-web';

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
    <UserContainer>

      <Card>
        <div style={{ height: '45vh', overflow: 'hidden', overflowY: 'auto', padding: 8 }}>
          {
            messageFetchMany.data?.map(_ => (
              <MessageCard key={`message_card_${_.id}`} message={_} profile={_.sendingProfileID === session?.profileID ? session.profile : _.sendingProfile} />
            ))
          }
        </div>
        <SendMessageCard receivingProfileID={receivingProfile.id} onMessageSent={onLoadMessages} />
      </Card>
    </UserContainer>
  );
}