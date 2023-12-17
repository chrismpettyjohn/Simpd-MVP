import React from 'react';
import { SiteHeader } from '../../layout/site-header/SiteHeader';
import { SiteSidebar } from '../../layout/site-sidebar/SiteSidebar';
import { UserContainerProps } from './UserContainer.types';
import { UserContainerElement, UserContainerInnerContent, UserContainerPageContent, UserContainerPageInnerContent } from './UserContainer.styled';

export function UserContainer({ children }: UserContainerProps) {
  return (
    <UserContainerElement>
      <UserContainerInnerContent>
        <SiteSidebar />
        <UserContainerPageContent>
          <SiteHeader />
          <UserContainerPageInnerContent>
            {children}
          </UserContainerPageInnerContent>
        </UserContainerPageContent>
      </UserContainerInnerContent>
    </UserContainerElement>
  )
}