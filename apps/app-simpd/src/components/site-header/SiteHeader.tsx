import React from 'react'
import { Link } from 'wouter';
import { UserGuard } from '@simpd/lib-web';
import { SwitchProfileButton } from './switch-profile-button/SwitchProfileButton';
import { SiteHeaderBrandContainer, SiteHeaderContainer, SiteHeaderElement, SiteHeaderLink, SiteHeaderNavigation, SiteHeaderTools } from './SiteHeader.sty';

export function SiteHeader() {
  return (
    <SiteHeaderContainer>
      <UserGuard>
        <SiteHeaderTools>
          <Link className="link" to="/notifications">
            <SiteHeaderLink>
              <i className="fa fa-bell" />
            </SiteHeaderLink>
          </Link>
          <SwitchProfileButton />

        </SiteHeaderTools>
      </UserGuard>
      <SiteHeaderBrandContainer>
        <h1>Simpd.</h1>
      </SiteHeaderBrandContainer>
      <SiteHeaderElement>
        <SiteHeaderNavigation>
          <Link to="/dashboard">
            <i className="fa fa-home" />
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
