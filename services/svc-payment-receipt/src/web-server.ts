import 'dotenv/config';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_PAYMENT_TRANSACTION_WEB_PORT} from '@simpd/lib-client';
import {PaymentTransactionModule} from './payment-transaction.module';

bootstrapDynamicService(
  PaymentTransactionModule,
  SVC_PAYMENT_TRANSACTION_WEB_PORT
);
