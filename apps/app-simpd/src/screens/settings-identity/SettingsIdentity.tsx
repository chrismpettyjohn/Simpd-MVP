import React from 'react';
import { PageTitle } from '../../components/page-title/PageTitle';
import { UserContainer } from '../../components/user-container/UserContainer';
import { SwitchProfileCard } from './switch-profile-card/SwitchProfileCard';
import { SettingsNavigation } from '../../components/settings-navigation/SettingsNavigation';

export function SettingsIdentityScreen() {
  return (
    <UserContainer>
      <PageTitle title="Settings-Identity" />
      <SettingsNavigation />
      <SwitchProfileCard />
    </UserContainer>
  )
}