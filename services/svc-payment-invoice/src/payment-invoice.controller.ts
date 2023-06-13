import {In} from 'typeorm';
import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {PaymentInvoiceRepository} from './payment-invoice.repository';
import {paymentInvoiceEntityToPaymentInvoiceWire} from './pament-invoice.wire';
import {
  PaymentInvoiceFindOneInput,
  PaymentInvoiceWire,
  SVC_PAYMENT_INVOICE_INTERNAL_EVENT_FIND_ONE,
  SVC_PAYMENT_INVOICE_INTERNAL_EVENT_FIND_MANY,
  SVC_PAYMENT_INVOICE_INTERNAL_EVENT_CREATE_ONE,
  PaymentInvoiceFindManyInput,
  PaymentInvoiceCreateInput,
} from '@simpd/lib-client';

@Controller()
export class PaymentInvoiceController {
  constructor(private readonly paymentInvoiceRepo: PaymentInvoiceRepository) {}

  @MessagePattern(SVC_PAYMENT_INVOICE_INTERNAL_EVENT_FIND_ONE)
  async paymentInvoiceFindOne(
    filter: PaymentInvoiceFindOneInput
  ): Promise<PaymentInvoiceWire> {
    const matchingPaymentInvoice = await this.paymentInvoiceRepo.findOneOrFail({
      where: {
        id: filter.id,
        userID: filter.userID,
        profileID: filter.profileID,
      },
    });
    return paymentInvoiceEntityToPaymentInvoiceWire(matchingPaymentInvoice);
  }

  @MessagePattern(SVC_PAYMENT_INVOICE_INTERNAL_EVENT_FIND_MANY)
  async paymentInvoicefindMany(
    filter: PaymentInvoiceFindManyInput
  ): Promise<PaymentInvoiceWire[]> {
    const matchingPaymentInvoices = await this.paymentInvoiceRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        userID: filter.userIDs && In(filter.userIDs),
        profileID: filter.profileIDs && In(filter.profileIDs),
      },
    });
    return matchingPaymentInvoices.map(
      paymentInvoiceEntityToPaymentInvoiceWire
    );
  }

  @MessagePattern(SVC_PAYMENT_INVOICE_INTERNAL_EVENT_CREATE_ONE)
  async paymentInvoiceCreateOne(
    input: PaymentInvoiceCreateInput
  ): Promise<PaymentInvoiceWire> {
    const matchingPaymentInvoice = await this.paymentInvoiceRepo.create(input);
    return paymentInvoiceEntityToPaymentInvoiceWire(matchingPaymentInvoice);
  }
}
