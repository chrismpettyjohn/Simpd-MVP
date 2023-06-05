import React from 'react';
import { Helmet } from 'react-helmet';
import { PageTitle } from '../../components/page-title/PageTitle';
import { PaymentMethodsCard } from './payment-methods-card/PaymentMethodsCard';
import { SettingsNavigation } from '../../components/settings-navigation/SettingsNavigation';

export function SettingsPaymentScreen() {
  return (
    <>
      <Helmet>
        <title>Settings-Payment - Simpd</title>
        <meta property="og:title" content="Settings-Payment - Simpd" />
      </Helmet>
      <PageTitle title="Settings" />
      <SettingsNavigation />
      <PaymentMethodsCard />
    </>
  )
}