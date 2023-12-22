import React from 'react';
import { PageTitle } from '../../components/page-title/PageTitle';
import { AddPaymentMethodCard } from 'components/add-payment-method-card/AddPaymentMethodCard';
import { ManagePaymentMethodsCard } from '../../components/manage-payment-methods-card/ManagePaymentMethodsCard';
import { SettingsContainer } from 'layout/settings-container/SettingsContainer';

export function SettingsPaymentMethodsScreen() {
  return (
    <SettingsContainer>
      <PageTitle title="Settings-Payment Methods" />
      <AddPaymentMethodCard />
      <ManagePaymentMethodsCard />
    </SettingsContainer>
  )
}