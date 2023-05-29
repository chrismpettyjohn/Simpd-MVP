import {Inject} from '@nestjs/common';
import {SVC_PAYMENT_RECEIPT_NAME} from './payment-receipt.const';
import {ClientProxy} from '@nestjs/microservices';

export const UsePaymentReceiptClient: () => ClientProxy = () =>
  Inject(SVC_PAYMENT_RECEIPT_NAME) as any;
