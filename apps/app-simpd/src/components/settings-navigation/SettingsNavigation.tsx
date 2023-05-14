import React from 'react';
import { Link } from 'wouter';

export function SettingsNavigation() {
  return (
    <div className="settings-profile-settings-navigation">
      <Link to="/settings/profile">
        <i className="fa fa-id-badge" />
      </Link>
      <Link to="/settings/notifications">
        <i className="fa fa-bell" />
      </Link>
      <Link to="/settings/contact">
        <i className="fa fa-address-book" />
      </Link>
      <Link to="/settings/security">
        <i className="fa fa-shield" />
      </Link>
    </div>
  )
}