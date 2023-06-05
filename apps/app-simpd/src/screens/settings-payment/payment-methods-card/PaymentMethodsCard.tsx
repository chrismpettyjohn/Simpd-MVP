import React from 'react';
import { CardAccordion } from 'components/card-accordion/CardAccordion';

export function PaymentMethodsCard() {
  return (
    <CardAccordion defaultIsOpen header="Payment Methods">
      You're 100% more likely to be ignored if you don't have a payment method.
    </CardAccordion>
  )
}