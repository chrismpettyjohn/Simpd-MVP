import React, { useContext, useEffect } from 'react';
import { CardAccordion } from 'components/card-accordion/CardAccordion';
import { ProfileEditor } from 'components/profile-editor/ProfileEditor';
import { ChangeCoverPhoto } from './change-cover-photo/ChangeCoverPhoto';
import { ChangeProfilePicture } from './change-profile-picture/ChangeProfilePicture';
import { ProfileUpdateInput, sessionContext, useProfileFetchOne, useProfileUpdate } from '@simpd/lib-web';

export function ProfileSettingsCard() {
  const { session } = useContext(sessionContext);
  const updateProfile = useProfileUpdate();
  const fetchProfile = useProfileFetchOne();

  useEffect(() => {
    fetchProfile.fetch({ profileID: session.profileID });
  }, [session.profileID])

  const onUpateProfile = async (profileDTO: ProfileUpdateInput) => {
    await updateProfile.execute({ profileID: session.profileID, changes: profileDTO });
  }

  return (
    <>
      {
        fetchProfile.data && (
          <>
            <CardAccordion defaultIsOpen header="Change Picture">
              <ChangeProfilePicture profile={fetchProfile.data} />
              <ChangeCoverPhoto profile={fetchProfile.data} />
            </CardAccordion>
            <CardAccordion header="Update Profile">
              <ProfileEditor defaultProfile={fetchProfile.data} onSave={onUpateProfile} />
            </CardAccordion>
          </>
        )
      }
    </>
  )
}