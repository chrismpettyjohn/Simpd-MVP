import React from 'react'
import { Helmet } from 'react-helmet'
import { PageTitle } from '../../components/page-title/PageTitle';
import { ChangePasswordCard } from './change-password-card/ChangePasswordCard';
import { SettingsNavigation } from '../../components/settings-navigation/SettingsNavigation';

export function SettingsSecurityScreen() {
  return (
    <>
      <Helmet>
        <title>Settings - Security - Simpd</title>
        <meta property="og:title" content="Settings - ProSecurityfile - Simpd" />
      </Helmet>
      <PageTitle title="Settings" />
      <SettingsNavigation />
      <ChangePasswordCard />
    </>
  )
}