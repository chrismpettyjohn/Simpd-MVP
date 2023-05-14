import { Link } from 'wouter';
import React, { useContext } from 'react';
import { Button } from 'components/button/Button';
import { UserGuard, sessionContext } from '@simpd/lib-web';
import { SwitchButtonContainer } from './SwitchProfileButton.sty';

export function SwitchProfileButton() {
  const { profile } = useContext(sessionContext);
  return (
    <UserGuard>
      <SwitchButtonContainer>
        <Link to="/settings/profile">
          <h3>
            <i className="fa fa-id-badge" style={{ marginRight: 8 }} />
            {profile?.username ?? <>Switch Profile</>}
          </h3>
        </Link>
      </SwitchButtonContainer>
    </UserGuard>
  )
}