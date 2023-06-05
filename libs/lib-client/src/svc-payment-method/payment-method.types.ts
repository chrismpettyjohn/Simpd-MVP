export enum PaymentProvider {
  Stripe = 'stripe',
}

export interface StripePaymentMethodWire {
  id: string;
  object: string;
  billing_details: {
    address: {
      city: string;
      country: string;
      line1: string;
      line2: string | null;
      postal_code: string;
      state: string;
    };
    email: string;
    name: string;
    phone: string;
  };
  card: {
    brand: string;
    checks: {
      address_line1_check: null;
      address_postal_code_check: null;
      cvc_check: string;
    };
    country: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    generated_from: null;
    last4: string;
    networks: {
      available: string[];
    };
    preferred: null;
  };
  three_d_secure_usage: {
    supported: boolean;
  };
  wallet: null;
  created: number; // Epoch timestamp
  customer: null;
  livemode: boolean;
  metadata: {
    order_id: string;
  };
  type: string;
}

export type PaymentMethodProviderDetails = StripePaymentMethodWire;

export interface PaymentMethodBillingAddressWire {
  country: string;
  city: string;
  street_address: string;
  street_address2: string;
  postal_code: string;
  state: string;
}

export interface PaymentMethodCardDetailsWire {
  brand: string;
  country: string;
  exp_month: number;
  exp_year: number;
  last4: string;
}

export interface PaymentMethodWire {
  id: number;
  userID: number;
  provider: PaymentProvider;
  providerID: string;
  billingAddress: PaymentMethodBillingAddressWire;
  providerDetails: PaymentMethodProviderDetails;
  cardDetails: PaymentMethodCardDetailsWire;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
