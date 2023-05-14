import React from 'react';
import './SettingsProfile.css';
import { Helmet } from 'react-helmet';
import { UserGuard } from '@simpd/lib-web';
import { PageTitle } from 'components/page-title/PageTitle';
import { SwitchProfileCard } from './switch-profile-card/SwitchProfileCard';
import { ProfileSettingsCard } from './profile-settings-card/ProfileSettingsCard';
import { SettingsNavigation } from 'components/settings-navigation/SettingsNavigation';

export function SettingsProfileScreen() {
  return (
    <UserGuard redirect>
      <Helmet>
        <title>Settings-Profile - Simpd</title>
        <meta property="og:title" content="Settings-Profile - Simpd" />
      </Helmet>
      <PageTitle title="Settings" />
      <SettingsNavigation />
      <SwitchProfileCard />
      <ProfileSettingsCard />
    </UserGuard>
  )
}