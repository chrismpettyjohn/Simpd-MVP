import 'dotenv/config';
import {reactiveMicroserviceBootstrap} from '@simpd/lib-api';
import {StripePaymentInvoiceBridgeModule} from './stripe-payment-invoice-bridge.module';

reactiveMicroserviceBootstrap(
  StripePaymentInvoiceBridgeModule,
  'stripe-payment-invoice-bridge'
);
