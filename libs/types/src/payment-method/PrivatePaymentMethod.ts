import {Timestamp} from '../utility/Timestamp';

export enum PaymentType {
  Card = 'card',
  Bank = 'bank',
}

// Todo: Add support for banks and credit cards for real?
export interface PrivatePaymentMethodWire {
  id: number;
  userID: number;
  fullName: string;
  paymentType: PaymentType;
  createdAt: Timestamp;
}

export const examplePrivatePaymentMethodWire: PrivatePaymentMethodWire = {
  id: 1,
  userID: 1,
  fullName: '',
  paymentType: PaymentType.Bank,
  createdAt: '',
};
