import { Button } from '../button/Button';
import React, { SyntheticEvent, useMemo, useState } from 'react';
import { ProfileSubscriptionGroupCreateInput } from '@simpd/lib-web';
import { ProfileSubscriptionGroupEditorProps } from './ProfileSubscriptionGroupEditor.types';

export function ProfileSubscriptionGroupEditor({ defaultProfileSubscriptionGroup, onSave }: ProfileSubscriptionGroupEditorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const defaultProfileSubscriptionGroupDTO = useMemo<ProfileSubscriptionGroupCreateInput>(() => {
    return {
      name: defaultProfileSubscriptionGroup?.subscriptionGroup?.name ?? '',
      description: defaultProfileSubscriptionGroup?.subscriptionGroup?.description ?? '',
      monthlyCostInDollarsAndCents: defaultProfileSubscriptionGroup?.subscriptionGroup?.monthlyCostInDollarsAndCents ?? '0.00',
    }
  }, [defaultProfileSubscriptionGroup]);
  const [profileSubscriptionGroupDTO, setProfileSubscriptionGroupDTO] = useState<ProfileSubscriptionGroupCreateInput>(defaultProfileSubscriptionGroupDTO);

  const onUpdateProfile = (changes: Partial<ProfileSubscriptionGroupCreateInput>) => {
    setProfileSubscriptionGroupDTO(_ => ({
      ..._,
      ...changes,
    }));
  }

  const onSaveProfileSubscriptionGroup = async (event: SyntheticEvent) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      await onSave(profileSubscriptionGroupDTO);
      setIsLoading(false);
      setProfileSubscriptionGroupDTO(defaultProfileSubscriptionGroupDTO);
    } catch (e: any) {
      setIsLoading(false);
      throw e;
    }
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
        value={profileSubscriptionGroupDTO.monthlyCostInDollarsAndCents}
        onChange={e => {
          console.log(e.target?.value);
          onUpdateProfile({ monthlyCostInDollarsAndCents: Number(e.target?.value ?? 0).toFixed(2) });
        }}
      />
      <br /><br />
      <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
        <Button type="submit" disabled={isLoading} onClick={onSaveProfileSubscriptionGroup}>
          {isLoading ? <i className="fa fa-spinner fa-spin" /> : <>Save</>}
        </Button>
      </div>
    </form>
  )
}