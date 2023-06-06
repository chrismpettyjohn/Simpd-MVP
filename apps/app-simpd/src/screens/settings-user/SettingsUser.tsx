import React from 'react';
import { Helmet } from 'react-helmet';
import { PageTitle } from '../../components/page-title/PageTitle';
import { SettingsNavigation } from '../../components/settings-navigation/SettingsNavigation';

export function SettingsUserScreen() {
  return (
    <>
      <Helmet>
        <title>Settings-User - Simpd</title>
        <meta property="og:title" content="Settings-User - Simpd" />
      </Helmet>
      <PageTitle title="Settings-User" />
      <SettingsNavigation />
    </>
  )
}