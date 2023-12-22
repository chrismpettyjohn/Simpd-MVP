import React, { useContext, useEffect } from 'react';
import { PageTitle } from '../../components/page-title/PageTitle';
import { SettingsContainer } from 'layout/settings-container/SettingsContainer';
import { sessionContext, useProfileFetchMany } from '@simpd/lib-web';
import { ProfileContainer } from './switch-profile-card/profile-container/ProfileContainer';
import { AddNewProfileButton } from './switch-profile-card/add-new-profile-button/AddNewProfileButton';

export function SettingsIdentityScreen() {
  const { session } = useContext(sessionContext);
  const userProfiles = useProfileFetchMany()

  useEffect(() => {
    if (!session?.userID) {
      return;
    }
    userProfiles.fetch({ userIDs: [session.userID] });
  }, [session?.userID]);
  return (
    <SettingsContainer>
      <PageTitle title="Settings-Identity" />
      <h1>Switch Profile</h1>
      <div style={{ height: '100vh', overflowY: 'auto', paddingRight: 16 }}>

        {
          userProfiles.loading && (
            <i className="fa fa-spinner fa-spin fa-3x" />
          )
        }
        {
          userProfiles.data?.map(_ => (
            <ProfileContainer key={`profile_${_.id}`} profile={_} />
          ))
        }
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <AddNewProfileButton />
        </div>
      </div>
    </SettingsContainer>
  )
}