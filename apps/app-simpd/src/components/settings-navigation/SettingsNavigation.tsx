import React from 'react';
import { Link } from 'wouter';
import { SettingsNavIcon } from './SettingsNavigation.sty';

export function SettingsNavigation() {
  return (
    <div className="settings-profile-settings-navigation">
      <Link to="/settings/identity">
        <SettingsNavIcon className="fa fa-users" />
      </Link>
      <Link to="/settings/profile">
        <SettingsNavIcon className="fa fa-id-badge" />
      </Link>
      <Link to="/settings/payment">
        <SettingsNavIcon className="fa fa-credit-card" />
      </Link>
      <Link to="/settings/security">
        <SettingsNavIcon className="fa fa-shield" />
      </Link>
    </div>
  )
}