import 'dotenv/config';
import {reactiveMicroserviceBootstrap} from '@simpd/lib-api';
import {StripeCustomerBridgeModule} from './stripe-customer-bridge.module';

reactiveMicroserviceBootstrap(
  StripeCustomerBridgeModule,
  'stripe-customer-bridge'
);
