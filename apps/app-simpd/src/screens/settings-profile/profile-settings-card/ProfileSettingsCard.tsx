import { Button } from 'components/button/Button';
import React, { SyntheticEvent, useContext, useState } from 'react';
import { CardAccordion } from 'components/card-accordion/CardAccordion';
import { ProfileUpdateInput, sessionContext, useProfileUpdate } from '@simpd/lib-web';

export function ProfileSettingsCard() {
  const { profile } = useContext(sessionContext);
  const [profileDTO, setProfileDTO] = useState<ProfileUpdateInput>({
    username: profile?.username ?? '',
    displayName: profile?.displayName ?? '',
    biography: profile.biography ?? '',
    location: profile.location ?? '',
    websiteURL: profile.websiteURL ?? '',
    wishlistURL: profile.wishlistURL ?? '',
  });
  const updateProfile = useProfileUpdate({ profileID: profile!.id, username: profile!.username, changes: profileDTO });

  const onChanges = (changes: Partial<ProfileUpdateInput>) => {
    setProfileDTO(_ => ({
      ..._,
      ...changes,
    }))
  }

  const onSaveChanges = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (updateProfile.loading) {
      return;
    }
    updateProfile.execute();
  }

  return (
    <CardAccordion defaultIsOpen header="Profile">
      <form onSubmit={onSaveChanges}>
        <label className="settings-profile-text02">Username</label>
        <input
          type="text"
          className="settings-profile-textinput input"
          value={profileDTO.username}
          onChange={e => onChanges({ username: e.target.value })}
        />
        <br /><br />
        <label className="settings-profile-text03">Display Name</label>
        <input
          type="text"
          className="settings-profile-textinput1 input"
          value={profileDTO.displayName}
          onChange={e => onChanges({ displayName: e.target.value })}
        />
        <br /><br />
        <label className="settings-profile-text04">Bio</label>
        <textarea
          className="settings-profile-textarea textarea"
          value={profileDTO.biography}
          onChange={e => onChanges({ biography: e.target.value })}
        />
        <br /><br />
        <label className="settings-profile-text05">Location</label>
        <input
          type="text"
          className="settings-profile-textinput2 input"
          value={profileDTO.location}
          onChange={e => onChanges({ location: e.target.value })}
        />
        <br /><br />
        <label className="settings-profile-text06">Website</label>
        <input
          type="text"
          className="settings-profile-textinput3 input"
          value={profileDTO.websiteURL}
          onChange={e => onChanges({ websiteURL: e.target.value })}
        />
        <br /><br />
        <label className="settings-profile-text07">Wishlist</label>
        <input
          type="text"
          className="settings-profile-textinput4 input"
          value={profileDTO.wishlistURL}
          onChange={e => onChanges({ wishlistURL: e.target.value })}
        />
        <br /><br />
        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
          <Button type="submit" disabled={updateProfile.loading}>
            {updateProfile.loading ? <i className="fa fa-spinner fa-spin" /> : <>Save</>}
          </Button>
        </div>
      </form>
    </CardAccordion>
  )
}