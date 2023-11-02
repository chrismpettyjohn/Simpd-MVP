import React from 'react';
import { Card } from '../../components/card/Card';
import { PageTitle } from '../../components/page-title/PageTitle';
import { DiscoverProfilesHeader } from './DiscoverProfiles.styled';
import { NewProfilesGrid } from './new-profiles-grid/NewProfilesGrid';
import { UserContainer } from '../../components/user-container/UserContainer';

export function DiscoverProfilesScreen() {
  return (
    <UserContainer>
      <PageTitle title="Discover" />
      <DiscoverProfilesHeader>Trending</DiscoverProfilesHeader>
      <Card>
        coming soon
      </Card>
      <DiscoverProfilesHeader>New Creators</DiscoverProfilesHeader>
      <Card>
        <NewProfilesGrid />
      </Card>
    </UserContainer>
  )
}
