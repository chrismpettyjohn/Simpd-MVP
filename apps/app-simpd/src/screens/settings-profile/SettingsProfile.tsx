import React from 'react';
import './SettingsProfile.css';
import { Helmet } from 'react-helmet';
import { PageTitle } from '../../components/page-title/PageTitle';
import { ProfileSettingsCard } from './profile-settings-card/ProfileSettingsCard';
import { SettingsNavigation } from '../../components/settings-navigation/SettingsNavigation';

export function SettingsProfileScreen() {
  return (
    <>
      <Helmet>
        <title>Settings-Profile - Simpd</title>
        <meta property="og:title" content="Settings-Profile - Simpd" />
      </Helmet>
      <PageTitle title="Settings-Profile" />
      <SettingsNavigation />
      <ProfileSettingsCard />
    </>
  )
}