import React, { useContext } from 'react';
import { sessionContext } from '@simpd/lib-web';
import { Button } from 'components/button/Button';
import { ProfileElement, ProfileIndicator } from './ProfileContainer.sty';
import { ProfileContainerProps } from './ProfileContainer.types';

export function ProfileContainer({ profile }: ProfileContainerProps) {
  const { profile: activeProfile, setProfile } = useContext(sessionContext);

  const onToggleProfile = () => {
    setProfile(profile);
  }

  const isActive = activeProfile?.id === profile.id;

  return (
    <ProfileElement>
      <h3>
        <ProfileIndicator className="fa fa-circle" selected={isActive} />
        {profile.username}
      </h3>
      <Button disabled={isActive} onClick={onToggleProfile}>
        Use Profile
      </Button>
    </ProfileElement>
  )
}