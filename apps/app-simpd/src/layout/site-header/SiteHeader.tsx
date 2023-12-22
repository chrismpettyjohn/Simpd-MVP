import React from 'react'
import { SiteHeaderContainer, SiteHeaderContent } from './SiteHeader.sty';
import { SiteHeaderProps } from 'layout/site-header/SiteHeader.types';
import { UserToolsDropdown } from 'components/user-tools-dropdown/UserToolsDropdown';

export function SiteHeader({ children, showUser = true }: SiteHeaderProps) {
  return (
    <SiteHeaderContainer>
      <SiteHeaderContent>
        <div style={{ display: 'flex', flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
          {children}
          {showUser && <UserToolsDropdown />}
        </div>
      </SiteHeaderContent>
    </SiteHeaderContainer>
  )
}
