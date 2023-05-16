import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet'
import React, { useEffect } from 'react'
import { useProfileFetchOne } from '@simpd/lib-web';
import { PageTitle } from 'components/page-title/PageTitle';
import { CardAccordion } from 'components/card-accordion/CardAccordion';
import { UserProfileCard } from 'components/user-profile-card/UserProfileCard';

export function UserProfileScreen() {
  const fetchProfile = useProfileFetchOne()
  const [, params] = useRoute<{ username: string }>('/profiles/:username');

  useEffect(() => {
    fetchProfile.fetch({ username: params!.username });
  }, [params?.username]);

  return (
    <>
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
    </>
  )
}