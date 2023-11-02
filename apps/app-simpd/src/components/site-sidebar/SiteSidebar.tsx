import React from 'react';
import { SiteLogo } from '../site-logo/SiteLogo';
import { SiteNavigation } from '../site-navigation/SiteNavigation';
import { SiteSidebarContent, SiteSidebarElement } from './SiteSidebar.styled';

export function SiteSidebar() {
  return (
    <SiteSidebarElement>
      <SiteSidebarContent>
        <SiteLogo style={{ height: '5em' }} />
        <SiteNavigation />
      </SiteSidebarContent>
    </SiteSidebarElement>
  )
}