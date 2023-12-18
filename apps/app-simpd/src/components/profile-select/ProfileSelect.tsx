import { ProfileFragment, useProfileFetchMany } from '@simpd/lib-web';
import { ProfileOpt, ProfileSelectProps } from './ProfileSelect.types';
import React, { useMemo } from 'react';
import BaseSelect from 'react-select/async';
import { BASE_SELECT_STYLES } from '../select/Select.const';

function profileToOpt(profile: ProfileFragment): ProfileOpt {
  return {
    label: (
      <>
        <b>{profile.displayName}</b>
        <small>{profile.username}</small>
      </>
    ),
    value: profile,
  }
}

export function ProfileSelect({ profileID, isClearable, onChange }: ProfileSelectProps) {
  const profiles = useProfileFetchMany();

  async function onFetchContacts(filter?: string): Promise<ProfileOpt[]> {
    const data = await profiles.fetch({});
    return data.map(profileToOpt);
  }

  function onChangeProfile(profile?: ProfileOpt) {
    onChange(profile.value);
  }

  const value: ProfileOpt | undefined = useMemo(() => {
    const matchingProfile = profiles?.data?.find(_ => _.id === profileID);
    if (!matchingProfile) {
      return undefined;
    }
    return profileToOpt(matchingProfile);
  }, [profileID]);

  return (
    <BaseSelect
      loadOptions={onFetchContacts}
      value={value}
      onChange={onChangeProfile as any}
      defaultValue={value}
      styles={BASE_SELECT_STYLES}
    />
  )
}