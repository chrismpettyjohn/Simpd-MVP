import React from 'react';
import { SiteSidebar } from '../../layout/site-sidebar/SiteSidebar';
import { UserContainerElement, UserContainerInnerContent, UserContainerPageContent, UserContainerPageInnerContent } from '../user-container/UserContainer.styled';
import { MessageContainerProps } from 'layout/message-container/MessageContainer.types';
import { MessageHeaderContactActivityStatus, MessageHeaderContactInformation, MessageHeaderContent, MessageHeaderElement, MessageHeaderWrapper } from 'layout/message-container/MessageContainer.styled';
import { ProfileSelect } from 'components/profile-select/ProfileSelect';
import { ProfileFragment } from '@simpd/lib-web';
import { Link, useLocation } from 'wouter';
import { ProfileIndicator } from 'screens/settings-identity/switch-profile-card/profile-container/ProfileContainer.sty';

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
          <MessageHeaderElement>
            <MessageHeaderWrapper>

              {
                profile && (
                  <MessageHeaderContent>
                    <MessageHeaderContactInformation>
                      <h1>{profile.displayName}</h1>
                      <div style={{ display: 'flex', gap: 4 }}>
                        <ProfileIndicator className="fa fa-circle" selected={false} />
                        <MessageHeaderContactActivityStatus>Unavailable</MessageHeaderContactActivityStatus>
                      </div>
                    </MessageHeaderContactInformation>
                    <Link href={`/video-call/${profile.username}`}>
                      <i className="fa fa-video fa-2x" style={{ cursor: 'pointer' }} />
                    </Link>
                  </MessageHeaderContent>
                )
              }
              {
                !profile && (
                  <>

                    <ProfileSelect profileID={undefined} onChange={onMessageRecipient} />
                  </>
                )
              }
            </MessageHeaderWrapper>
          </MessageHeaderElement>
          <UserContainerPageInnerContent>
            {children}
          </UserContainerPageInnerContent>
        </UserContainerPageContent>
      </UserContainerInnerContent>
    </UserContainerElement >
  )
}