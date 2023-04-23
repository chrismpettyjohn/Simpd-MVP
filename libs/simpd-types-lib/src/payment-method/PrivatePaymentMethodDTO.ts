import {PaymentType} from './PrivatePaymentMethod';

export interface CreatePrivatePaymentMethodDTO {
  fullName: string;
  paymentType: PaymentType;
}
