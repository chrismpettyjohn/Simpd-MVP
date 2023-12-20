import React from 'react';
import { PageTitle } from '../../components/page-title/PageTitle';
import { SwitchProfileCard } from './switch-profile-card/SwitchProfileCard';
import { SettingsNavigation } from '../../components/settings-navigation/SettingsNavigation';
import { SettingsContainer } from 'layout/settings-container/SettingsContainer';

export function SettingsIdentityScreen() {
  return (
    <SettingsContainer>
      <PageTitle title="Settings-Identity" />
      <SettingsNavigation />
      <SwitchProfileCard />
    </SettingsContainer>
  )
}