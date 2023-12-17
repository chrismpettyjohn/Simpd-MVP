import React from 'react';
import { SiteLogo } from '../site-logo/SiteLogo';
import { SiteNavigation } from '../site-navigation/SiteNavigation';
import { SiteSidebarContent, SiteSidebarElement } from './SiteSidebar.styled';
import { ButtonBrand } from '../../components/button/Button.remix';
import { Link } from 'wouter';

export function SiteSidebar() {
  return (
    <SiteSidebarElement>
      <SiteSidebarContent>
        <SiteLogo altLogo style={{ height: '4em' }} />
        <SiteNavigation />
        <Link to="/posts/create">
          <ButtonBrand>
            New Post <i className="fa fa-plus" style={{ marginLeft: 8 }} />
          </ButtonBrand>
        </Link>
      </SiteSidebarContent>
    </SiteSidebarElement>
  )
}