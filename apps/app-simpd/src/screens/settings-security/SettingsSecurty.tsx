import React from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { ChangePasswordCard } from './change-password-card/ChangePasswordCard';
import { SettingsNavigation } from '../../components/settings-navigation/SettingsNavigation';

export function SettingsSecurityScreen() {
  return (
    <>
      <PageTitle title="Settings-Security" />
      <SettingsNavigation />
      <ChangePasswordCard />
    </>
  )
}