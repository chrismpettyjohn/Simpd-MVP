import {TipWire} from '@simpd/lib-client';
import {TipEntity} from './tip.entity';

export function tipEntityToTipWire(tipEntity: TipEntity): TipWire {
  return {
    id: tipEntity.id!,
    userID: tipEntity.userID,
    profileID: tipEntity.profileID,
    receivingUserID: tipEntity.receivingUserID,
    receivingProfileID: tipEntity.receivingProfileID,
    paymentInvoiceID: tipEntity.paymentInvoiceID,
    amount: tipEntity.amountInCents,
    message: tipEntity.message,
  };
}
