import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet'
import React, { useEffect } from 'react'
import { PageTitle } from 'components/page-title/PageTitle';
import { UserGuard, useProfileFetchOne } from '@simpd/lib-web';
import { CardAccordion } from 'components/card-accordion/CardAccordion';
import { UserProfileCard } from 'components/user-profile-card/UserProfileCard';

export function UserProfileScreen() {
  const [, params] = useRoute<{ username: string }>('/profile/:username');
  const fetchProfile = useProfileFetchOne({ username: params?.username })

  useEffect(() => {
    fetchProfile.fetch();
  }, [params?.username]);

  return (
    <UserGuard redirect>
      <Helmet>
        <title>User-Profile - Simpd</title>
        <meta property="og:title" content="User-Profile - Simpd" />
      </Helmet>
      <PageTitle title="User Profile" />
      {
        fetchProfile.data && (
          <UserProfileCard profile={fetchProfile.data} />
        )
      }
      <CardAccordion header="Posts">
        i post about how big my butt is
      </CardAccordion>
      <CardAccordion header="Albums">
        look at my big butt
      </CardAccordion>
      <CardAccordion header="Payments">
        pay for my dinner loser
      </CardAccordion>
    </UserGuard>
  )
}