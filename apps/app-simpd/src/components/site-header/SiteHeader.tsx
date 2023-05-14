import React from 'react'
import { Link } from 'wouter';
import { SiteHeaderBrandContainer, SiteHeaderContainer, SiteHeaderElement, SiteHeaderNavigation } from './SiteHeader.sty';
import { SwitchProfileButton } from './switch-profile-button/SwitchProfileButton';

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
          <Link to="/profiles/thaii">
            <i className="fa fa-id-badge" />
          </Link>
          <Link to="/settings/profile">
            <i className="fa fa-wrench" />
          </Link>
        </SiteHeaderNavigation>
      </SiteHeaderElement>
    </SiteHeaderContainer>
  )
}
