import 'dotenv/config';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_PAYMENT_TRANSACTION_WEB_PORT} from '@simpd/lib-client';
import {PaymentTransactionModule} from './payment-transaction.module';

dynamicServiceBootstrap(
  PaymentTransactionModule,
  SVC_PAYMENT_TRANSACTION_WEB_PORT,
  'payment-transaction'
);
