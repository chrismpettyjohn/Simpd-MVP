import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  PaymentInvoiceCreateInput,
  PaymentInvoiceFindManyInput,
  PaymentInvoiceFindOneInput,
  PaymentInvoiceWire,
} from './payment-invoice.types';
import {
  SVC_PAYMENT_INVOICE_INTERNAL_EVENT_CREATE_ONE,
  SVC_PAYMENT_INVOICE_INTERNAL_EVENT_FIND_MANY,
  SVC_PAYMENT_INVOICE_INTERNAL_EVENT_FIND_ONE,
  SVC_PAYMENT_INVOICE_INTERNAL_EVENT_INVOICE_CREATED,
  SVC_PAYMENT_INVOICE_NAME,
} from './payment-invoice.const';

@Injectable()
export class PaymentInvoiceClientService {
  constructor(@Inject(SVC_PAYMENT_INVOICE_NAME) private client: ClientProxy) {}

  async findOne(
    filter: PaymentInvoiceFindOneInput
  ): Promise<PaymentInvoiceWire> {
    const matchingPaymentInvoice$ = this.client.send(
      SVC_PAYMENT_INVOICE_INTERNAL_EVENT_FIND_ONE,
      filter
    );
    return await lastValueFrom(matchingPaymentInvoice$);
  }
  async findMany(
    filter: PaymentInvoiceFindManyInput
  ): Promise<PaymentInvoiceWire[]> {
    const matchingPaymentInvoices$ = this.client.send(
      SVC_PAYMENT_INVOICE_INTERNAL_EVENT_FIND_MANY,
      filter
    );
    return await lastValueFrom(matchingPaymentInvoices$);
  }

  async createOne(
    input: PaymentInvoiceCreateInput
  ): Promise<PaymentInvoiceWire> {
    const newPaymentInvoice = this.client.send(
      SVC_PAYMENT_INVOICE_INTERNAL_EVENT_CREATE_ONE,
      input
    );
    return await lastValueFrom(newPaymentInvoice);
  }

  async invoiceCreated(newPaymentInvoice: PaymentInvoiceWire): Promise<void> {
    this.client.emit(
      SVC_PAYMENT_INVOICE_INTERNAL_EVENT_INVOICE_CREATED,
      newPaymentInvoice
    );
  }
}
