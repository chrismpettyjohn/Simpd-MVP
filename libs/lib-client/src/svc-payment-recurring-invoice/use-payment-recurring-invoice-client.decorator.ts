import {Inject} from '@nestjs/common';
import {SVC_PAYMENT_RECURRING_INVOICE_NAME} from './payment-recurring-invoice.const';
import {ClientProxy} from '@nestjs/microservices';

export const UsePaymentRecurringInvoiceClient: () => ClientProxy = () =>
  Inject(SVC_PAYMENT_RECURRING_INVOICE_NAME) as any;
