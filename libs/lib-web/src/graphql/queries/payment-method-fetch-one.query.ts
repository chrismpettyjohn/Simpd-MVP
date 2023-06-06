import gql from "graphql-tag";
import { PAYMENT_METHOD_FRAGMENT, PaymentMethodFragment } from "../fragments/payment-method.fragment";

export interface PaymentMethodFetchOneFilterInput {
  id?: number[];
}

export interface PaymentMethodFetchOneQueryVariables {
  filter: PaymentMethodFetchOneFilterInput;
}

export interface PaymentMethodFetchOneQueryResponse {
  paymentMethod: PaymentMethodFragment;
}

export const PAYMENT_METHOD_FETCH_ONE_QUERY = gql`
${PAYMENT_METHOD_FRAGMENT}
  query($filter: PaymentMethodFindOneInput!) {
    paymentMethod(
      filter: $filter
    ) {
      ...PaymentMethodFragment
    }
  }
`