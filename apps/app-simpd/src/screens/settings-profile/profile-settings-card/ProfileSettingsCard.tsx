import React, { useContext } from 'react';
import { CardAccordion } from '../../../components/card-accordion/CardAccordion';
import { ProfileEditor } from '../../../components/profile-editor/ProfileEditor';
import { UserProfileCard } from '../../../components/user-profile-card/UserProfileCard';
import { ProfileUpdateInput, sessionContext, useProfileUpdate } from '@simpd/lib-web';

export function ProfileSettingsCard() {
  const updateProfile = useProfileUpdate();
  const { session } = useContext(sessionContext);

  const onUpateProfile = async (profileDTO: ProfileUpdateInput) => {
    await updateProfile.execute({ profileID: session!.profileID, changes: profileDTO });
  }

  return (
    <>
      <UserProfileCard profile={session!.profile!} />
      <CardAccordion header="Update Profile">
        <ProfileEditor defaultProfile={session!.profile!} onSave={onUpateProfile} />
      </CardAccordion>
    </>
  )
}