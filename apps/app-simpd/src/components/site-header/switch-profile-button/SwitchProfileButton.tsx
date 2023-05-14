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
          <Button onClick={() => console.log('switch')} style={{ float: 'right' }}>
            {profile?.username ?? 'Switch Profile'}
          </Button>
        </Link>
      </SwitchButtonContainer>
    </UserGuard>
  )
}