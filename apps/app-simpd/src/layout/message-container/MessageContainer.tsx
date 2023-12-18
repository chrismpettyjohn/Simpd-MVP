import React from 'react';
import { SiteSidebar } from '../../layout/site-sidebar/SiteSidebar';
import { UserContainerElement, UserContainerInnerContent, UserContainerPageContent, UserContainerPageInnerContent } from '../user-container/UserContainer.styled';
import { MessageContainerProps } from 'layout/message-container/MessageContainer.types';
import { MessageHeaderContainer, MessageHeaderContent } from 'layout/message-container/MessageContainer.styled';
import { Input } from '../../components/input/Input';
import { MessageCreateDialog } from 'components/message-create-dialog/MessageCreateDialog';

export function MessageContainer({ children, message }: MessageContainerProps) {
  return (
    <UserContainerElement>
      <UserContainerInnerContent>
        <SiteSidebar />
        <UserContainerPageContent>
          <MessageHeaderContainer>
            <MessageHeaderContent>
              {
                message && (
                  <>
                    <h1>message thread</h1>
                  </>
                )
              }
              {
                !message && (
                  <>
                    <Input placeholder="Search for some hoes.." />
                    <div style={{ display: 'flex', flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
                      <MessageCreateDialog />
                    </div>
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