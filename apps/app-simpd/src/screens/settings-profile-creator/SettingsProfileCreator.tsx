import { Helmet } from 'react-helmet';
import { Card } from 'components/card/Card';
import { Button } from 'components/button/Button';
import React, { SyntheticEvent, useState } from 'react';
import { PageTitle } from 'components/page-title/PageTitle';
import { ProfileUpdateInput, UserGuard } from '@simpd/lib-web';

export function SettingsProfileCreatorScreen() {
  const [loading, setIsLoading] = useState(false);
  const [profileDTO, setProfileDTO] = useState<ProfileUpdateInput>({
    username: '',
    displayName: '',
    biography: '',
    location: '',
    websiteURL: '',
    wishlistURL: '',
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
      //onSave(profileDTO);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <UserGuard redirect>
      <Helmet>
        <title>Create Profile - Simpd</title>
        <meta property="og:title" content="Create Profile - Simpd" />
      </Helmet>
      <PageTitle title="Create Profile" />
      <Card>

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
          <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
            <Button type="submit" disabled={loading}>
              {loading ? <i className="fa fa-spinner fa-spin" /> : <>Save</>}
            </Button>
          </div>
        </form>
      </Card>
    </UserGuard>
  )
}