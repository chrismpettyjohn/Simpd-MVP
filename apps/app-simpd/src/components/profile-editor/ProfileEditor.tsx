import { Button } from '../button/Button';
import { ProfileUpdateInput } from '@simpd/lib-web';
import React, { SyntheticEvent, useState } from 'react';
import { ProfileEditorProps } from './ProfileEditor.types';

export function ProfileEditor({ defaultProfile, onSave }: ProfileEditorProps) {
  const [loading, setIsLoading] = useState(false);
  const [profileDTO, setProfileDTO] = useState<ProfileUpdateInput>({
    username: defaultProfile?.username ?? '',
    displayName: defaultProfile?.displayName ?? '',
    biography: defaultProfile?.biography ?? '',
    location: defaultProfile?.location ?? '',
    websiteURL: defaultProfile?.websiteURL ?? '',
    wishlistURL: defaultProfile?.wishlistURL ?? '',
  });

  const onChanges = (changes: Partial<ProfileUpdateInput>) => {
    setProfileDTO(_ => ({
      ..._,
      ...changes,
    }))
  }

  const onSaveChanges = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (loading) {
        return;
      }
      onSave(profileDTO);
    } finally {
      setIsLoading(false);
    }
  }

  return (
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
        <Button type="submit" disabled={loading}>
          {loading ? <i className="fa fa-spinner fa-spin" /> : <>Save</>}
        </Button>
      </div>
    </form>
  )
}