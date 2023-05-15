import React from 'react';
import { Button } from 'components/button/Button';
import { useProfileCreateRandomized } from '@simpd/lib-web';
import { useSwitchProfile } from 'hooks/use-switch-profile.hook';

export function AddNewProfileButton() {
  const switchProfile = useSwitchProfile();
  const profileCreateRandomized = useProfileCreateRandomized();

  const onAddProfile = async () => {
    if (profileCreateRandomized.loading) {
      return;
    }
    const newProfile = await profileCreateRandomized.execute();
    switchProfile.execute(newProfile);
  }

  return (
    <Button disabled={profileCreateRandomized.loading} onClick={onAddProfile} type="button">
      {profileCreateRandomized.loading ? (<><i className="fa fa-spinner fa-spin" style={{ marginRight: 4 }} /> Adding Profile</>) : <>Add Profile</>}
    </Button>

  )
}