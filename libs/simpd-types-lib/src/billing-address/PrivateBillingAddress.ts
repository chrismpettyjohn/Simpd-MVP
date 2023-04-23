import {Timestamp} from '../utility/Timestamp';

export interface PrivateBillingAddressWire {
  id: number;
  userID: number;
  streetAddress: string;
  city: string;
  postalCode: string;
  state: string;
  createdAt: Timestamp;
}

export const examplePrivateBillingAddressWire: PrivateBillingAddressWire = {
  id: 1,
  userID: 1,
  streetAddress: '',
  city: '',
  postalCode: '',
  state: '',
  createdAt: '',
};
