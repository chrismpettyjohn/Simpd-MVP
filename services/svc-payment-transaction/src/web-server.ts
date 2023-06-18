import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {PaymentInvoiceModule} from './payment-invoice.module';
import {SVC_PAYMENT_TRANSACTION_WEB_PORT} from '@simpd/lib-client';

dynamicServiceBootstrap(
  PaymentInvoiceModule,
  SVC_PAYMENT_TRANSACTION_WEB_PORT,
  'payment-invoice'
);
