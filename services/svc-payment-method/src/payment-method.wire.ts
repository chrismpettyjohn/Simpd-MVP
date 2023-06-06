import {PaymentMethodWire} from '@simpd/lib-client';
import {PaymentMethodEntity} from './payment-method.entity';
import {PaymentMethodModel} from './payment-method.model';

export function paymentMethodEntityToPaymentMethodWire(
  paymentMethodEntity: PaymentMethodEntity
): PaymentMethodWire {
  return {
    id: paymentMethodEntity.id!,
    userID: paymentMethodEntity.userID,
    provider: paymentMethodEntity.provider,
    providerID: paymentMethodEntity.providerID,
    providerDetails: paymentMethodEntity.providerDetails,
    billingAddress: paymentMethodEntity.billingAddress,
    cardDetails: paymentMethodEntity.cardDetails,
    createdAt: paymentMethodEntity.createdAt!.toString(),
    updatedAt: paymentMethodEntity.updatedAt!.toString(),
    deletedAt: paymentMethodEntity.deletedAt?.toString(),
  };
}

export function paymentMethodEntityToPaymentMethodModel(
  paymentMethodEntity: PaymentMethodEntity
): PaymentMethodModel {
  return {
    id: paymentMethodEntity.id!,
    userID: paymentMethodEntity.userID,
    billingAddress: {
      ...paymentMethodEntity.billingAddress,
      streetAddress1: paymentMethodEntity.billingAddress.street_address,
      streetAddress2: paymentMethodEntity.billingAddress.street_address2,
      postalCode: paymentMethodEntity.billingAddress.postal_code,
    },
    cardDetails: paymentMethodEntity.cardDetails,
  };
}
