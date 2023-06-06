import gql from "graphql-tag";

export const PAYMENT_METHOD_FRAGMENT = gql`
  fragment PaymentMethodFragment on PaymentMethodModel {
    id
    userID
    billingAddress {
      country
      city
      streetAddress1
      streetAddress2
      postalCode
      state
    }
    cardDetails {
      brand
      country
      exp_month
      exp_year
      last4
    }
  }
`

export interface PaymentMethodFragment {
  id: number;
  userID: number;
  billingAddress: {
    country: string;
    city: string;
    streetAddress1: string;
    streetAddress2: string;
    postalCode: string;
    state: string;
  },
  cardDetails: {
    brand: string;
    country: string;
    exp_month: number;
    exp_year: number;
    last4: string;
  },
}