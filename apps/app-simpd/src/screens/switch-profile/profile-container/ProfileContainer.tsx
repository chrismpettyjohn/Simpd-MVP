import React, { useContext } from 'react';
import { sessionContext } from '@simpd/lib-web';
import { Button } from 'components/button/Button';
import { ProfileElement } from './ProfileContainer.sty';
import { ProfileContainerProps } from './ProfileContainer.types';

export function ProfileContainer({ profile }: ProfileContainerProps) {
  const { profile: activeProfile, setProfile } = useContext(sessionContext);

  const onToggleProfile = () => {
    setProfile(profile);
  }

  const isActive = activeProfile?.id === profile.id;

  return (
    <ProfileElement>
      <h1>
        <i className={isActive ? 'fa fa-star' : 'fa fa-circle'} style={{ marginRight: '2rem' }} />
        {profile.username}
      </h1>
      <Button disabled={isActive} onClick={onToggleProfile}>
        Use Profile
      </Button>
    </ProfileElement>
  )
}