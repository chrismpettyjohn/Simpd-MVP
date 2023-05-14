import React, { useContext } from 'react';
import { Button } from 'components/button/Button';
import { SwitchButtonContainer } from './SwitchProfileButton.sty';
import { Link } from 'wouter';
import { UserGuard, sessionContext } from '@simpd/lib-web';

export function SwitchProfileButton() {
  const { profile } = useContext(sessionContext);
  return (
    <UserGuard>
      <SwitchButtonContainer>
        <Link to="/switch-profile">
          <Button onClick={() => console.log('switch')} style={{ float: 'right' }}>
            {profile?.username ?? 'Switch Profile'}
          </Button>
        </Link>
      </SwitchButtonContainer>
    </UserGuard>
  )
}