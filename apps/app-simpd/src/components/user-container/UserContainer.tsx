import React from 'react';
import { SiteHeader } from '../site-header/SiteHeader';
import { SiteSidebar } from '../site-sidebar/SiteSidebar';
import { UserContainerProps } from './UserContainer.types';
import { UserContainerElement, UserContainerPageContent, UserContainerPageInnerContent } from './UserContainer.styled';

export function UserContainer({ children }: UserContainerProps) {
  return (
    <UserContainerElement>
      <SiteSidebar />
      <UserContainerPageContent>
        <UserContainerPageInnerContent>
          <SiteHeader />
          {children}
        </UserContainerPageInnerContent>
      </UserContainerPageContent>
    </UserContainerElement>
  )
}