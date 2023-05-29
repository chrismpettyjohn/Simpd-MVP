import {Inject} from '@nestjs/common';
import {SVC_PAYMENT_RECURRING_INVOICE_NAME} from './payment-recurring-invoice.const';

export const PaymentRecurringInvoiceClient = () =>
  Inject(SVC_PAYMENT_RECURRING_INVOICE_NAME);
