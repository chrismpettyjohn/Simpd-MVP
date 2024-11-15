import React from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { ChangePasswordCard } from './change-password-card/ChangePasswordCard';
import { SettingsContainer } from 'layout/settings-container/SettingsContainer';

export function SettingsSecurityScreen() {
  return (
    <SettingsContainer>
      <PageTitle title="Settings-Security" />
      <ChangePasswordCard />
    </SettingsContainer>
  )
}