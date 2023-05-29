import 'dotenv/config';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_PAYMENT_RECURRING_INVOICE_WEB_PORT} from '@simpd/lib-client';
import {PaymentRecurringInvoiceModule} from './payment-recurring-invoice.module';

bootstrapDynamicService(
  PaymentRecurringInvoiceModule,
  SVC_PAYMENT_RECURRING_INVOICE_WEB_PORT
);
