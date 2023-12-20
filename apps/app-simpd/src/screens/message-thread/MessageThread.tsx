import { Link, useRoute } from 'wouter';
import React, { useContext, useEffect } from 'react';
import { MessageCard } from 'components/message-card/MessageCard';
import { SendMessageCard } from 'components/send-message-card/SendMessageCard';
import { FullPageLoadingScreen, sessionContext, useMessageFetchMany, useProfileFetchOne } from '@simpd/lib-web';
import { MessageHeaderContactActivityStatus, MessageHeaderContactInformation, MessageHeaderContent } from './MessageThread.styled';
import { UserContainerElement, UserContainerInnerContent, UserContainerPageContent, UserContainerPageInnerContent } from 'layout/user-container/UserContainer.styled';
import { SiteSidebar } from 'layout/site-sidebar/SiteSidebar';
import { SiteHeader } from 'layout/site-header/SiteHeader';
import { ProfileIndicator } from 'screens/settings-identity/switch-profile-card/profile-container/ProfileContainer.sty';
import { UserContainer } from 'layout/user-container/UserContainer';
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

  const messageHeader = (
    <MessageHeaderContent>
      <MessageHeaderContactInformation>
        <h1>{profileFetchOne?.data?.displayName}</h1>
        <div style={{ display: 'flex', gap: 4 }}>
          <ProfileIndicator className="fa fa-circle" selected={false} />
          <MessageHeaderContactActivityStatus>Unavailable</MessageHeaderContactActivityStatus>
        </div>
      </MessageHeaderContactInformation>
      <Link href={`/video-call/${profileFetchOne?.data?.username}`}>
        <i className="fa fa-video fa-2x" style={{ cursor: 'pointer' }} />
      </Link>
    </MessageHeaderContent>
  )

  return (
    <UserContainer headerProps={{ children: messageHeader, showUser: false }}>
      {
        messageFetchMany.data?.map(_ => {
          const direction = _.sendingProfileID === session?.profileID ? 'left' : 'right';
          const profile = _.sendingProfileID === session?.profileID ? session.profile : _.sendingProfile;
          return (
            <MessageCard key={`message_card_${_.id}`} message={_} profile={profile} direction={direction} />
          )
        })
      }
      <SendMessageCard receivingProfileID={receivingProfile.id} onMessageSent={onLoadMessages} />
    </UserContainer>
  );
}