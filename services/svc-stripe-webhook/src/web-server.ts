import 'dotenv/config';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {StripeWebhookModule} from './stripe-webhook.module';
import {SVC_STRIPE_WEBHOOK_WEB_PORT} from '@simpd/lib-client';

bootstrapDynamicService(
  StripeWebhookModule,
  SVC_STRIPE_WEBHOOK_WEB_PORT,
  'stripe-webhook'
);
