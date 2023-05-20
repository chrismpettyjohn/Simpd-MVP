import { Link } from 'wouter';
import React, { useContext } from 'react'
import { UserGuard, sessionContext } from '@simpd/lib-web';
import { SiteHeaderBrandContainer, SiteHeaderContainer, SiteHeaderElement, SiteHeaderLink, SiteHeaderNavigation, SiteHeaderTools, SiteHeaderToolsContainer } from './SiteHeader.sty';

export function SiteHeader() {
  const { session: { profile } } = useContext(sessionContext);
  return (
    <SiteHeaderContainer>
      <UserGuard>
        <SiteHeaderToolsContainer>
          <SiteHeaderTools>
            <Link to={`/profiles/${profile.username}`}>
              <SiteHeaderLink>
                <i className="fa fa-id-badge" style={{ marginRight: 8 }} />
                {profile?.username ?? <>Switch Profile</>}
              </SiteHeaderLink>
            </Link>
            <Link className="link" to="/notifications">
              <SiteHeaderLink>
                <i className="fa fa-bell" style={{ marginRight: 8 }} />
                Updates
              </SiteHeaderLink>
            </Link>
            <Link to="/settings/identity">
              <SiteHeaderLink>
                <i className="fa fa-wrench" style={{ marginRight: 8 }} />
                Settings
              </SiteHeaderLink>
            </Link>
            <Link to="/sign-out">
              <SiteHeaderLink>
                <i className="fa fa-sign-out" style={{ marginRight: 8 }} />
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
