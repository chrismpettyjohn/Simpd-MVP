import {PaymentInvoiceWire} from '@simpd/lib-client';
import {PaymentInvoiceEntity} from './payment-invoice.entity';
import {convertCentsToDollarsAndCents} from '@simpd/lib-api';

export function paymentInvoiceEntityToPaymentInvoiceWire(
  paymentInvoiceEntity: PaymentInvoiceEntity
): PaymentInvoiceWire {
  return {
    id: paymentInvoiceEntity.id!,
    userID: paymentInvoiceEntity.userID,
    profileID: paymentInvoiceEntity.profileID,
    amountInCents: paymentInvoiceEntity.amountInCents,
    amountInDollarsAndCents: convertCentsToDollarsAndCents(
      paymentInvoiceEntity.amountInCents
    ),
    description: paymentInvoiceEntity.description,
  };
}
