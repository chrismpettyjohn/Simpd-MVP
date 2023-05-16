import React, { useContext, useEffect } from 'react';
import { sessionContext, useProfileFetchMany } from '@simpd/lib-web';
import { CardAccordion } from 'components/card-accordion/CardAccordion';
import { ProfileContainer } from './profile-container/ProfileContainer';
import { AddNewProfileButton } from './add-new-profile-button/AddNewProfileButton';

export function SwitchProfileCard() {
  const { session } = useContext(sessionContext);
  const userProfiles = useProfileFetchMany({ userIDs: [session.userID] })

  useEffect(() => {
    if (!session?.userID) {
      return;
    }
    userProfiles.fetch();
  }, [session?.userID]);

  return (
    <CardAccordion defaultIsOpen header="Switch Profile">
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
    </CardAccordion>
  )
}