import 'dotenv/config';
import {reactiveMicroserviceBootstrap} from '@simpd/lib-api';
import {StripePaymentMethodBridgeModule} from './stripe-payment-method-bridge.module';

reactiveMicroserviceBootstrap(
  StripePaymentMethodBridgeModule,
  'stripe-payment-method-bridge'
);
