import React from 'react'
import { Helmet } from 'react-helmet'
import { UserGuard } from '@simpd/lib-web';
import { Card } from 'components/card/Card';
import { PageTitle } from 'components/page-title/PageTitle';

export function SwitchProfileScreen() {
  return (
    <UserGuard redirect>
      <Helmet>
        <title>Switch Profile - Simpd</title>
        <meta property="og:title" content="Switch Profile - Simpd" />
      </Helmet>
      <PageTitle title="My Profiles" />
      <Card>
        <div style={{ height: 100 }}>
          Hello
        </div>
      </Card>
    </UserGuard >
  )
}