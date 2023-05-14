import React from 'react'
import { Link } from 'wouter';
import { Helmet } from 'react-helmet';
import { Card } from 'components/card/Card';
import { GuestGuard } from '@simpd/lib-web';
import { PageTitle } from 'components/page-title/PageTitle';

export function CreateAccountScreen() {


  return (
    <GuestGuard redirect>
      <Helmet>
        <title>Simpd</title>
        <meta property="og:title" content="Simpd" />
      </Helmet>
      <PageTitle title="Create account" />
      <Card>

      </Card>
    </GuestGuard>
  )
}