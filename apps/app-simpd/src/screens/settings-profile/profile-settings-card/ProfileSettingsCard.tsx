import { Button } from 'components/button/Button';
import React, { useContext } from 'react';
import { ProfileEditor } from '../profile-editor/ProfileEditor';
import { CardAccordion } from 'components/card-accordion/CardAccordion';
import { ProfileUpdateInput, sessionContext, useProfileUpdate } from '@simpd/lib-web';

export function ProfileSettingsCard() {
  const { profile } = useContext(sessionContext);
  const updateProfile = useProfileUpdate();

  const onUpateProfile = async (profileDTO: ProfileUpdateInput) => {
    await updateProfile.execute({ profileID: profile?.id, username: profile?.username, changes: profileDTO });
  }


  return (
    <CardAccordion defaultIsOpen header="Profile">
      {
        profile && (
          <ProfileEditor defaultProfile={profile} onSave={onUpateProfile} />
        )
      }
      {
        !profile && (
          <p>Select a profile to get started</p>
        )
      }
    </CardAccordion>
  )
}