import React, { useContext } from 'react';
import { sessionContext } from '@simpd/lib-web';
import { Button } from 'components/button/Button';
import { ProfileContainerProps } from './ProfileContainer.types';
import { useSwitchProfile } from 'hooks/use-switch-profile.hook';
import { ProfileElement, ProfileIndicator } from './ProfileContainer.sty';

export function ProfileContainer({ profile }: ProfileContainerProps) {
  const switchProfile = useSwitchProfile();
  const { session } = useContext(sessionContext);

  const isActive = session?.profileID === profile.id;

  const onSwitchProfile = () => {
    if (isActive) {
      return;
    }

    switchProfile.execute(profile);
  }

  return (
    <ProfileElement>
      <h3>
        <ProfileIndicator className="fa fa-circle" selected={isActive} />
        {profile.username}
      </h3>
      <Button disabled={isActive} onClick={onSwitchProfile}>
        {
          switchProfile.loading ? <><i className="fa fa-spinner fa-spin" style={{ marginRight: 4 }} /> Using Profile</> : <>Use Profile</>
        }
      </Button>
    </ProfileElement>
  )
}