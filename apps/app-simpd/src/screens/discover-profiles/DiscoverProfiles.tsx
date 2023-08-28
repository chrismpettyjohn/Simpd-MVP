import React from 'react';
import { Helmet } from 'react-helmet'
import { Card } from '../../components/card/Card';
import { PageTitle } from '../../components/page-title/PageTitle';
import { DiscoverProfilesHeader } from './DiscoverProfiles.styled';
import { NewProfilesGrid } from './new-profiles-grid/NewProfilesGrid';

export function DiscoverProfilesScreen() {
  return (
    <>
      <Helmet>
        <title>Discover - Simpd</title>
        <meta property="og:title" content="Bookmarks - Simpd" />
      </Helmet>
      <PageTitle title="Discover" />
      <DiscoverProfilesHeader>Trending</DiscoverProfilesHeader>
      <Card>
        coming soon
      </Card>
      <DiscoverProfilesHeader>New Creators</DiscoverProfilesHeader>
      <Card>
        <NewProfilesGrid />
      </Card>
    </>
  )
}
