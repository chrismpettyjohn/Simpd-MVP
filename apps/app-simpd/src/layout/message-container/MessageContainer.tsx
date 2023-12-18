import React from 'react';
import { SiteSidebar } from '../../layout/site-sidebar/SiteSidebar';
import { UserContainerElement, UserContainerInnerContent, UserContainerPageContent, UserContainerPageInnerContent } from '../user-container/UserContainer.styled';
import { MessageContainerProps } from 'layout/message-container/MessageContainer.types';
import { MessageHeaderContainer, MessageHeaderContent } from 'layout/message-container/MessageContainer.styled';
import { ProfileSelect } from 'components/profile-select/ProfileSelect';
import { ProfileFragment } from '@simpd/lib-web';
import { Link, useLocation } from 'wouter';

export function MessageContainer({ children, profile }: MessageContainerProps) {
  const [, setLocation] = useLocation();
  function onMessageRecipient(profile?: ProfileFragment) {
    if (!profile?.username) {
      return;
    }
    setLocation(`/messages/threads/${profile.username}`)
  }
  return (
    <UserContainerElement>
      <UserContainerInnerContent>
        <SiteSidebar />
        <UserContainerPageContent>
          <MessageHeaderContainer>
            <MessageHeaderContent>
              {
                profile && (
                  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>{profile.displayName}</h1>
                    <Link href={`/video-call/${profile.username}`}>
                      <i className="fa fa-video fa-2x" style={{ cursor: 'pointer' }} />
                    </Link>
                  </div>
                )
              }
              {
                !profile && (
                  <>

                    <ProfileSelect profileID={undefined} onChange={onMessageRecipient} />
                  </>
                )
              }
            </MessageHeaderContent>
          </MessageHeaderContainer>
          <UserContainerPageInnerContent>
            {children}
          </UserContainerPageInnerContent>
        </UserContainerPageContent>
      </UserContainerInnerContent>
    </UserContainerElement>
  )
}