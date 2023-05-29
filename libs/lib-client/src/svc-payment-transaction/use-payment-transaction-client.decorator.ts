import {Inject} from '@nestjs/common';
import {SVC_PAYMENT_TRANSACTION_NAME} from './payment-transaction.const';
import {ClientProxy} from '@nestjs/microservices';

export const UsePaymentTransactionClient: () => ClientProxy = () =>
  Inject(SVC_PAYMENT_TRANSACTION_NAME) as any;
