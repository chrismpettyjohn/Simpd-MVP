export interface PaymentMethodFindOneInput {
  id?: number;
  userID?: number;
}

export interface PaymentMethodCreateOneInput {
  userID: number;
}

export interface PaymentMethodUpdateOneInput {}

export interface PaymentMethodMutationResponse {
  success: boolean;
  id: number;
}

export type PaymentMethodUpdateOneResponse = PaymentMethodMutationResponse;

export type PaymentMethodDeleteOneInput = PaymentMethodFindOneInput;

export type PaymentMethodDeleteOneResponse = PaymentMethodMutationResponse;
