import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {PaymentInvoiceModule} from './payment-invoice.module';
import {
  SVC_PAYMENT_INVOICE_NAME,
  SVC_PAYMENT_INVOICE_WEB_PORT,
} from '@simpd/lib-client';

dynamicServiceBootstrap(
  SVC_PAYMENT_INVOICE_NAME,
  PaymentInvoiceModule,
  SVC_PAYMENT_INVOICE_WEB_PORT,
  'payment-invoice'
);
