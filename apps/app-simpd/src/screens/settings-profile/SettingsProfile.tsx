import './SettingsProfile.css';
import React, { useContext } from 'react';
import { sessionContext } from '@simpd/lib-web';
import { PageTitle } from '../../components/page-title/PageTitle';
import { ProfileSettingsCard } from './profile-settings-card/ProfileSettingsCard';
import { UserProfileCard } from '../../components/user-profile-card/UserProfileCard';
import { SubscriptionGroupsCard } from './subscription-groups-card/SubscriptionGroupsCard';
import { SettingsNavigation } from '../../components/settings-navigation/SettingsNavigation';
import { SettingsContainer } from 'layout/settings-container/SettingsContainer';

export function SettingsProfileScreen() {
  const { session } = useContext(sessionContext);

  return (
    <SettingsContainer>
      <PageTitle title="Settings-Profile" />
      <SettingsNavigation />
      <UserProfileCard profile={session!.profile!} />
      <ProfileSettingsCard />
      <SubscriptionGroupsCard />
    </SettingsContainer>
  )
}