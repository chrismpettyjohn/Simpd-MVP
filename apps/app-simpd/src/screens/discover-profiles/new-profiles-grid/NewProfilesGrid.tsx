import React, { useEffect } from 'react';
import { ProfileSortBy, useProfileFetchMany } from '@simpd/lib-web';
import { UserProfileCard } from '../../../components/user-profile-card/UserProfileCard';

export function NewProfilesGrid() {
  const fetchProfiles = useProfileFetchMany();

  useEffect(() => {
    fetchProfiles.fetch({
      sortBy: [ProfileSortBy.NEWEST_PROFILE],
      limit: 10
    })
  }, []);

  if (fetchProfiles.loading || !fetchProfiles.data) {
    return <i className="fa fa-spinner fa-spin" />
  }

  return (
    <>
      {
        fetchProfiles.data.map(_ => (
          <UserProfileCard key={`newest_profile_${_.id}`} profile={_} />
        ))
      }
    </>
  )
}