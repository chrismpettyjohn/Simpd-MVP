import { Link } from 'wouter';
import React, { useContext } from 'react';
import { sessionContext } from '@simpd/lib-web';
import { SiteHeaderLink } from '../SiteHeader.sty';

export function SwitchProfileButton() {
  const { session: { profile } } = useContext(sessionContext);
  return (
    <Link to={`/profiles/${profile.username}`}>
      <SiteHeaderLink>
        <i className="fa fa-id-badge" style={{ marginRight: 8 }} />
        {profile?.username ?? <>Switch Profile</>}
      </SiteHeaderLink>
    </Link>
  )
}