import 'dotenv/config';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {StripeWebhookModule} from './stripe-webhook.module';
import {SVC_PAYMENT_INVOICE_WEB_PORT} from '@simpd/lib-client';

bootstrapDynamicService(StripeWebhookModule, SVC_PAYMENT_INVOICE_WEB_PORT);
