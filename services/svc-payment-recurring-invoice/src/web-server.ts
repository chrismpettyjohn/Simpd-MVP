import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_PAYMENT_RECURRING_INVOICE_WEB_PORT} from '@simpd/lib-client';
import {PaymentRecurringInvoiceModule} from './payment-recurring-invoice.module';

dynamicServiceBootstrap(
  PaymentRecurringInvoiceModule,
  SVC_PAYMENT_RECURRING_INVOICE_WEB_PORT
);
