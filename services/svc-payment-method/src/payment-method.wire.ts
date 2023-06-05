import {PaymentMethodWire} from '@simpd/lib-client';
import {PaymentMethodEntity} from './payment-method.entity';

export function paymentMethodEntityToPaymentMethodWire(
  paymentMethodEntity: PaymentMethodEntity
): PaymentMethodWire {
  return {
    id: paymentMethodEntity.id!,
    userID: paymentMethodEntity.userID,
    provider: paymentMethodEntity.provider,
    providerDetails: paymentMethodEntity.providerDetails,
    billingAddress: paymentMethodEntity.billingAddress,
    cardDetails: paymentMethodEntity.cardDetails,
    createdAt: paymentMethodEntity.createdAt!.toString(),
    updatedAt: paymentMethodEntity.updatedAt!.toString(),
    deletedAt: paymentMethodEntity.deletedAt?.toString(),
  };
}
