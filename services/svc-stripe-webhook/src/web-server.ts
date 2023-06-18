import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {StripeWebhookModule} from './stripe-webhook.module';
import {
  SVC_STRIPE_WEBHOOK_NAME,
  SVC_STRIPE_WEBHOOK_WEB_PORT,
} from '@simpd/lib-client';

dynamicServiceBootstrap(
  SVC_STRIPE_WEBHOOK_NAME,
  StripeWebhookModule,
  SVC_STRIPE_WEBHOOK_WEB_PORT,
  'stripe-webhook'
);
