import {Inject} from '@nestjs/common';
import {SVC_PAYMENT_TRANSACTION_NAME} from './payment-transaction.const';

export const PaymentTransactionClient = () =>
  Inject(SVC_PAYMENT_TRANSACTION_NAME);
