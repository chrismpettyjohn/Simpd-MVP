import { Link } from 'wouter';
import React, { useContext } from 'react';
import { Button } from 'components/button/Button';
import { sessionContext } from '@simpd/lib-web';
import { SiteHeaderLink } from '../SiteHeader.sty';

export function SwitchProfileButton() {
  const { session: { profile } } = useContext(sessionContext);
  return (
    <Link to="/settings/profile">
      <SiteHeaderLink>
        <h3>
          <i className="fa fa-id-badge" style={{ marginRight: 8 }} />
          {profile?.username ?? <>Switch Profile</>}
        </h3>
      </SiteHeaderLink>
    </Link>
  )
}