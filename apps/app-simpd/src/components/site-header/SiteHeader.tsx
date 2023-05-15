import React from 'react'
import { Link } from 'wouter';
import { UserGuard } from '@simpd/lib-web';
import { SwitchProfileButton } from './switch-profile-button/SwitchProfileButton';
import { SiteHeaderBrandContainer, SiteHeaderContainer, SiteHeaderElement, SiteHeaderNavigation } from './SiteHeader.sty';

export function SiteHeader() {
  return (
    <SiteHeaderContainer>
      <SwitchProfileButton />
      <SiteHeaderBrandContainer>
        <h1>Simpd.</h1>
      </SiteHeaderBrandContainer>
      <SiteHeaderElement>
        <SiteHeaderNavigation>
          <Link to="/dashboard">
            <i className="fa fa-home" />
          </Link>
          <Link to="/notifications">
            <i className="fa fa-bell" />
          </Link>
          <Link to="/messages">
            <i className="fa fa-comment" />
          </Link>
          <Link to="/favorites">
            <i className="fa fa-heart" />
          </Link>
          <UserGuard>
            <Link to="/settings/identity">
              <i className="fa fa-wrench" />
            </Link>
            <Link to="/sign-out">
              <i className="fa fa-sign-out" />
            </Link>
          </UserGuard>
        </SiteHeaderNavigation>
      </SiteHeaderElement>
    </SiteHeaderContainer>
  )
}
