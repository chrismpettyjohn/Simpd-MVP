import React from 'react';
import { Button } from 'components/button/Button';
import { SwitchButtonContainer } from './SwitchProfileButton.sty';
import { Link } from 'wouter';
import { UserGuard } from '@simpd/lib-web';

export function SwitchProfileButton() {
  return (
    <UserGuard>
      <SwitchButtonContainer>
        <Link to="/switch-profile">
          <Button onClick={() => console.log('switch')} style={{ float: 'right' }}>
            Switch Profile
          </Button>
        </Link>
      </SwitchButtonContainer>
    </UserGuard>
  )
}