import React from 'react';
import { Helmet } from 'react-helmet';
import { UserGuard } from '@simpd/lib-web';
import { PageTitle } from 'components/page-title/PageTitle';
import { SwitchProfileCard } from './switch-profile-card/SwitchProfileCard';
import { SettingsNavigation } from 'components/settings-navigation/SettingsNavigation';

export function SettingsIdentityScreen() {
  return (
    <UserGuard redirect>
      <Helmet>
        <title>Settings-Identity - Simpd</title>
        <meta property="og:title" content="Settings-Identity - Simpd" />
      </Helmet>
      <PageTitle title="Settings" />
      <SettingsNavigation />
      <SwitchProfileCard />
    </UserGuard>
  )
}