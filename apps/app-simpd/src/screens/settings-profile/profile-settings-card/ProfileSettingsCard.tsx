import React, { useContext, useEffect } from 'react';
import { ProfileEditor } from 'components/profile-editor/ProfileEditor';
import { CardAccordion } from 'components/card-accordion/CardAccordion';
import { ProfileUpdateInput, sessionContext, useProfileFetchOne, useProfileUpdate } from '@simpd/lib-web';

export function ProfileSettingsCard() {
  const { session } = useContext(sessionContext);
  const updateProfile = useProfileUpdate();
  const fetchProfile = useProfileFetchOne(({ id: session.profileID }));

  useEffect(() => {
    fetchProfile.fetch();
  }, [session.profileID])

  const onUpateProfile = async (profileDTO: ProfileUpdateInput) => {
    await updateProfile.execute({ profileID: session.profileID, changes: profileDTO });
  }


  return (
    <CardAccordion header="Profile">
      {
        fetchProfile.data && (
          <ProfileEditor defaultProfile={fetchProfile.data} onSave={onUpateProfile} />
        )
      }
    </CardAccordion>
  )
}