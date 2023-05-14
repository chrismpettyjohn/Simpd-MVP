import React from 'react'
import { Helmet } from 'react-helmet'
import { ProfileGuard } from '@simpd/lib-web';
import { PageTitle } from 'components/page-title/PageTitle';
import { CardAccordion } from 'components/card-accordion/CardAccordion';
import { SettingsNavigation } from 'components/settings-navigation/SettingsNavigation';

export function SettingsSecurityScreen() {
  return (
    <ProfileGuard redirect>
      <Helmet>
        <title>Settings - Security - Simpd</title>
        <meta property="og:title" content="Settings - ProSecurityfile - Simpd" />
      </Helmet>
      <PageTitle title="Settings" />
      <SettingsNavigation />
      <CardAccordion header="Password" defaultIsOpen>
        <div style={{ height: 100 }}>
          Hello
        </div>
      </CardAccordion>
    </ProfileGuard>
  )
}