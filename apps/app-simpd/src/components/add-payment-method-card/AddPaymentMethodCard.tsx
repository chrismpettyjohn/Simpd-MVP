import React, { useMemo } from 'react';
import { Card } from 'components/card/Card';
import { STRIPE_PUBLIC_KEY } from '@simpd/lib-web';
import { Elements, PaymentElement, } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';

const StripeElementProvider: any = Elements;

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export function AddPaymentMethodCard() {
  const options = useMemo((): StripeElementsOptions => ({
    mode: 'setup',
    currency: 'usd',
    paymentMethodTypes: ['card']
  }), []);


  return (
    <Card header="Add Payment Method">
      <StripeElementProvider stripe={stripePromise} options={options}>
        <PaymentElement />
      </StripeElementProvider>
    </Card>
  )
}