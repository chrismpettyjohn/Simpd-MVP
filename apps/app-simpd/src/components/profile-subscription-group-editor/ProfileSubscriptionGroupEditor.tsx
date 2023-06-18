import React, { SyntheticEvent, useState } from 'react';
import { ProfileSubscriptionGroupCreateInput } from '@simpd/lib-web';
import { ProfileSubscriptionGroupEditorProps } from './ProfileSubscriptionGroupEditor.types';

export function ProfileSubscriptionGroupEditor({ defaultProfileSubscriptionGroup }: ProfileSubscriptionGroupEditorProps) {
  const [profileSubscriptionGroupDTO, setProfileSubscriptionGroupDTO] = useState<ProfileSubscriptionGroupCreateInput>({
    name: defaultProfileSubscriptionGroup?.subscriptionGroup?.name ?? '',
    description: defaultProfileSubscriptionGroup?.subscriptionGroup?.description ?? '',
    monthlyCost: defaultProfileSubscriptionGroup?.subscriptionGroup?.monthlyCost ?? 0,
  })

  const onUpdateProfile = (changes: Partial<ProfileSubscriptionGroupCreateInput>) => {
    setProfileSubscriptionGroupDTO(_ => ({
      ..._,
      ...changes,
    }));
  }

  const onSaveProfileSubscriptionGroup = (event: SyntheticEvent) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSaveProfileSubscriptionGroup}>
      <label className="settings-profile-text07">Name</label>
      <input
        type="text"
        className="settings-profile-textinput4 input"
        value={profileSubscriptionGroupDTO.name}
        onChange={e => onUpdateProfile({ name: e.target?.value ?? '' })}
      />
      <br /><br />
      <label className="settings-profile-text04">Bio</label>
      <textarea
        className="settings-profile-textarea textarea"
        value={profileSubscriptionGroupDTO.description}
        onChange={e => onUpdateProfile({ description: e.target?.value ?? '' })}
      />
      <br /><br />
      <label className="settings-profile-text07">Monthly Cost</label>
      <input
        type="text"
        className="settings-profile-textinput4 input"
        value={profileSubscriptionGroupDTO.monthlyCost}
        onChange={e => onUpdateProfile({ monthlyCost: Number(e.target?.value ?? 0) })}
      />
    </form>
  )
}