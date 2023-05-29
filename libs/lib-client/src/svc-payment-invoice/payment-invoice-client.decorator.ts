import {Inject} from '@nestjs/common';
import {SVC_PAYMENT_INVOICE_NAME} from './payment-invoice.const';

export const PaymentInvoiceClient = () => Inject(SVC_PAYMENT_INVOICE_NAME);
