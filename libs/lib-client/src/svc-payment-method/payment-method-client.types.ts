import {
  PaymentMethodBillingAddressWire,
  PaymentMethodCardDetailsWire,
  PaymentMethodProviderDetails,
  PaymentProvider,
} from './payment-method.types';

export interface PaymentMethodFindOneInput {
  id?: number;
  userID?: number;
}

export interface PaymentMethodCreateOneInput {
  userID: number;
  provider: PaymentProvider;
  providerID: string;
  providerDetails: PaymentMethodProviderDetails;
  billingAddress: PaymentMethodBillingAddressWire;
  cardDetails: PaymentMethodCardDetailsWire;
}

export interface PaymentMethodUpdateOneInput {}

export interface PaymentMethodMutationResponse {
  success: boolean;
  id: number;
}

export type PaymentMethodUpdateOneResponse = PaymentMethodMutationResponse;

export type PaymentMethodDeleteOneInput = PaymentMethodFindOneInput;

export type PaymentMethodDeleteOneResponse = PaymentMethodMutationResponse;
