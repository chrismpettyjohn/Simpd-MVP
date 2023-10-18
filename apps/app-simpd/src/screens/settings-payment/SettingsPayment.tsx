import React from 'react';
import { PageTitle } from '../../components/page-title/PageTitle';
import { SettingsNavigation } from '../../components/settings-navigation/SettingsNavigation';
import { AddPaymentMethodCard } from 'components/add-payment-method-card/AddPaymentMethodCard';
import { ManagePaymentMethodsCard } from '../../components/manage-payment-methods-card/ManagePaymentMethodsCard';

export function SettingsPaymentScreen() {
  return (
    <>
      <PageTitle title="Settings-Payment" />
      <SettingsNavigation />
      <AddPaymentMethodCard />
      <ManagePaymentMethodsCard />
    </>
  )
}