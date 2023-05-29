import {Inject} from '@nestjs/common';
import {SVC_PAYMENT_INVOICE_NAME} from './payment-invoice.const';
import {ClientProxy} from '@nestjs/microservices';

export const UsePaymentInvoiceClient: () => ClientProxy = () =>
  Inject(SVC_PAYMENT_INVOICE_NAME) as any;
