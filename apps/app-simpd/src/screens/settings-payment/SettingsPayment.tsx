import React from 'react';
import { Helmet } from 'react-helmet';
import { PageTitle } from '../../components/page-title/PageTitle';
import { SettingsNavigation } from '../../components/settings-navigation/SettingsNavigation';
import { AddPaymentMethodCard } from 'components/add-payment-method-card/AddPaymentMethodCard';
import { ManagePaymentMethodsCard } from '../../components/manage-payment-methods-card/ManagePaymentMethodsCard';

export function SettingsPaymentScreen() {
  return (
    <>
      <Helmet>
        <title>Settings-Payment - Simpd</title>
        <meta property="og:title" content="Settings-Payment - Simpd" />
      </Helmet>
      <PageTitle title="Settings-Payment" />
      <SettingsNavigation />
      <AddPaymentMethodCard />
      <ManagePaymentMethodsCard />
    </>
  )
}