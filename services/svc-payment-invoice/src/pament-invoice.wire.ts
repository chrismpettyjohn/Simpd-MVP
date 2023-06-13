import {PaymentInvoiceWire} from '@simpd/lib-client';
import {PaymentInvoiceEntity} from './payment-invoice.entity';

export function paymentInvoiceEntityToPaymentInvoiceWire(
  paymentInvoiceEntity: PaymentInvoiceEntity
): PaymentInvoiceWire {
  return {
    id: paymentInvoiceEntity.id!,
    userID: paymentInvoiceEntity.userID,
    profileID: paymentInvoiceEntity.profileID,
    amount: paymentInvoiceEntity.amount,
    description: paymentInvoiceEntity.description,
  };
}
