import Stripe from 'stripe';
import {STRIPE_SECRET_KEY} from './stripe.const';

export function generateStripeClient(): Stripe {
  return new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15',
  });
}
