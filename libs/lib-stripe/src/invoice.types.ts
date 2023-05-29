
export interface StripeInvoiceLineItemCustomUnitAmount {
  maxinmum: number;
  minimnum: number;
  preset: number;
}

// Each element represents a pricing tier. This parameter requires billing_scheme to be set to tiered. See also the documentation for billing_scheme. This field is not included by default. To include it in the response, expand the tiers field.
export interface StripeInvoiceLineItemPricingTier {
  flat_amount: number;
  flat_amount_decimal: string;
  unit_amount: number;
  unit_amount_decimal: string;
  up_to: number;
}
// Apply a transformation to the reported usage or set quantity before computing the amount billed.Cannot be combined with tiers.
export interface StripeInvoiceLineItemTransformQuantity {
  // Divide usage by this number.
  divide_by: number;
  // After division, either round the result up or down.
  round: 'up' | 'down';
}

// The recurring components of a price such as interval and usage_type.
export interface StripeInvoiceLineItemRecurring {
  // Specifies a usage aggregation strategy for prices of usage_type=metered. Allowed values are sum for summing up all usage during a period, last_during_period for using the last usage record reported within a period, last_ever for using the last usage record ever (across period bounds) or max which uses the usage record with the maximum reported usage during a period. Defaults to sum.
  aggregate_usage: string;
  // The frequency at which a subscription is billed. One of day, week, month or year.
  interval: string;
  // The number of intervals (specified in the interval property) between subscription billings. For example, interval=month and interval_count=3 bills every 3 months.
  interval_count: number;
  // Configures how the quantity per period should be determined. Can be either metered or licensed. licensed automatically bills the quantity set for a plan when adding it to a subscription, whereas metered aggregates the total usage based on usage records. Defaults to licensed.
  usage_type: string;
  // Only required if a default tax behavior was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of inclusive, exclusive, or unspecified. Once specified as either inclusive or exclusive, it cannot be changed.
  tax_behavior: string;
  tiers: StripeInvoiceLineItemPricingTier[];
  // Defines if the tiering price should be graduated or volume based. In volume-based tiering, the maximum quantity within a period determines the per unit price. In graduated tiering, pricing can change as the quantity grows.
  tiers_mode: string;
  transform_quantity: StripeInvoiceLineItemTransformQuantity;
  // One of one_time or recurring depending on whether the price is for a one-time purchase or a recurring (subscription) purchase.
  type: string;
  // The unit amount in cents to be charged, represented as a whole integer if possible. Only set if billing_scheme=per_unit.
  unit_amount: number;
  // The unit amount in cents to be charged, represented as a decimal string with at most 12 decimal places. Only set if billing_scheme=per_unit.
  unit_amount_decimal: string;
}

// The individual line items that make up the invoice. lines is sorted as follows: (1) pending invoice items (including prorations) in reverse chronological order, (2) subscription items in reverse chronological order, and (3) invoice items added after invoice creation in chronological order.
export interface StripeInvoiceLineItem {
  // Unique identifier for the object.
  id: string;
  object: string;
  // The amount, in cents.
  amount: number;
  amount_excluding_tax: number;
  // Three-letter ISO currency code, in lowercase. Must be a supported currency.
  currency: string;
  // An arbitrary string attached to the object. Often useful for displaying to users.
  description: string;
  discount_amounts: any[];
  discountable: boolean;
  discounts: any[];
  invoice_item: string;
  livemode: boolean;
  // Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Note that for line items with type=subscription this will reflect the metadata of the subscription that caused the line item to be created.
  metadata: any;
  // The period this line_item covers. For subscription line items, this is the subscription period. For prorations, this starts when the proration was calculated, and ends at the period end of the subscription. For invoice items, this is the time at which the invoice item was created or the period of the item. If you have Stripe Revenue Recognition enabled, the period will be used to recognize and defer revenue. See the Revenue Recognition documentation for details.
  period: {
    end: number;
    start: number;
  };
  // The price of the line item.
  price: {
    // Unique identifier for the object.
    id: string;
    // String representing the object’s type. Objects of the same type share the same value.
    object: string;
    // Whether the price can be used for new purchases.
    active: boolean;
    // Describes how to compute the price per period. Either per_unit or tiered. per_unit indicates that the fixed amount (specified in unit_amount or unit_amount_decimal) will be charged per unit in quantity (for prices with usage_type=licensed), or per unit of total usage (for prices with usage_type=metered). tiered indicates that the unit pricing will be computed using a tiering strategy as defined using the tiers and tiers_mode attributes.
    billing_scheme: string;
    // Time at which the object was created. Measured in seconds since the Unix epoch.
    created: number;
    // Three-letter ISO currency code, in lowercase. Must be a supported currency.
    currency: string;
    // When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
    custom_unit_amount: StripeInvoiceLineItemCustomUnitAmount | null;
    // Has the value true if the object exists in live mode or the value false if the object exists in test mode.
    livemode: boolean;
    // A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.
    lookup_key: null;
    // Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    metadata: any;
    // A brief description of the price, hidden from customers.
    nickname: null;
    // The ID of the product this price is associated with.
    product: string;
    recurring: null;
    tax_behavior: string;
    tiers_mode: null;
    transform_quantity: null;
    type: string;
    unit_amount: number;
    unit_amount_decimal: string;
  };
  proration: boolean;
  proration_details: {
    created_items: null;
  }
  quantity: number;
  subscription: string;
  tax_amounts: any[];
  tax_rates: any[];
  type: string;
  unit_amount_excluding_tax: string;
}

export interface StripeInvoice {
  // Unique identifier for the object. This property is always present unless the invoice is an upcoming invoice. See Retrieve an upcoming invoice for more details.
  id: string;
  // Controls whether Stripe will perform automatic collection of the invoice. When false, the invoice’s state will not automatically advance without an explicit action.
  auto_advance: boolean;
  // ID of the latest charge generated for this invoice, if any.
  charge: string;
  // Either charge_automatically, or send_invoice. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions.
  collection_method: string;
  // Three-letter ISO currency code, in lowercase. Must be a supported currency.
  currency: string;
  // The ID of the customer who will be billed.
  customer: string;
  // An arbitrary string attached to the object. Often useful for displaying to users. Referenced as ‘memo’ in the Dashboard.
  description: string;
  // The URL for the hosted invoice page, which allows customers to view and pay an invoice. If the invoice has not been finalized yet, this will be null.
  hosted_invoice_url: string;
  lines: StripeInvoiceLineItem[];
  livemode: boolean;
  metadata: any;
  period_end: number;
  period_start: number;
  status: string;
  total: number;
  total_excluding_tax: number;
  total_tax_amounts: any[];
  webhooks_delivered_at: number;
  number: null;
  on_behalf_of: null;
  paid: boolean;
  paid_out_of_band: boolean;
  payment_intent: null;
  payment_settings: {
    default_mandate: null;
    payment_method_options: null;
    payment_method_types: null;
  };
  post_payment_credit_notes_amount: number;
  pre_payment_credit_notes_amount: number;
  quote: null;
  receipt_number: null;
  rendering_options: null;
  shipping_cost: null;
  shipping_details: null;
  starting_balance: number;
  statement_descriptor: null;
  status_transitions: {
    finalized_at: null;
    marked_uncollectible_at: null;
    paid_at: null;
    voided_at: null;
  }
  subscription: null;
  subtotal: number;
  subtotal_excluding_tax: number;
  tax: null;
  test_clock: null;
  total_discount_amounts: any[];
  transfer_data: null;
}