import {Inject} from '@nestjs/common';
import {SVC_PAYMENT_RECEIPT_NAME} from './payment-receipt.const';

export const PaymentReceiptClient = () => Inject(SVC_PAYMENT_RECEIPT_NAME);
