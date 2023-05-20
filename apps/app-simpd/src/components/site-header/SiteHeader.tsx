import React from 'react'
import { Link } from 'wouter';
import { UserGuard } from '@simpd/lib-web';
import { SwitchProfileButton } from './switch-profile-button/SwitchProfileButton';
import { SiteHeaderBrandContainer, SiteHeaderContainer, SiteHeaderElement, SiteHeaderLink, SiteHeaderNavigation, SiteHeaderTools, SiteHeaderToolsContainer } from './SiteHeader.sty';

export function SiteHeader() {
  return (
    <SiteHeaderContainer>
      <UserGuard>
        <SiteHeaderToolsContainer>
          <SiteHeaderTools>
            <SwitchProfileButton />
            <Link className="link" to="/notifications">
              <SiteHeaderLink>
                <i className="fa fa-bell" style={{ marginRight: 4 }} />
                Updates
              </SiteHeaderLink>
            </Link>
            <Link to="/sign-out">
              <SiteHeaderLink>
                <i className="fa fa-sign-out" style={{ marginTop: 4, marginRight: 4 }} />
                Sign Out
              </SiteHeaderLink>
            </Link>
          </SiteHeaderTools>
        </SiteHeaderToolsContainer>
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
        </SiteHeaderNavigation>
      </SiteHeaderElement>
    </SiteHeaderContainer>
  )
}
