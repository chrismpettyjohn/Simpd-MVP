import gql from "graphql-tag";
import { PAYMENT_METHOD_FRAGMENT, PaymentMethodFragment } from "../fragments/payment-method.fragment";

export interface PaymentMethodFetchManyFilterInput {
  ids?: number[];
}

export interface PaymentMethodFetchManyQueryVariables {
  filter: PaymentMethodFetchManyFilterInput;
}

export interface PaymentMethodFetchManyQueryResponse {
  paymentMethods: PaymentMethodFragment[];
}

export const PAYMENT_METHOD_FETCH_MANY_QUERY = gql`
${PAYMENT_METHOD_FRAGMENT}
  query($filter: PaymentMethodFindManyInput!) {
    paymentMethods(
      filter: $filter
    ) {
      ...PaymentMethodFragment
    }
  }
`