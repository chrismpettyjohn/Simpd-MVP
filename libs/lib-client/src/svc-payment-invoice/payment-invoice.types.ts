import {
  SVC_PAYMENT_INVOICE_INTERNAL_EVENT_CREATE_ONE,
  SVC_PAYMENT_INVOICE_INTERNAL_EVENT_FIND_MANY,
  SVC_PAYMENT_INVOICE_INTERNAL_EVENT_FIND_ONE,
  SVC_PAYMENT_INVOICE_INTERNAL_EVENT_INVOICE_CREATED,
} from './payment-invoice.const';

export interface PaymentInvoiceWire {
  id: number;
  userID: number;
  profileID: number;
  amount: number;
  description: string;
}

export interface PaymentInvoiceFindOneInput {
  id?: number;
  userID?: number;
  profileID?: number;
}

export interface PaymentInvoiceFindManyInput {
  ids?: number[];
  userIDs?: number[];
  profileIDs?: number[];
}

export interface PaymentInvoiceCreateInput {
  userID: number;
  profileID: number;
  amount: number;
  description: string;
}

export interface PaymentInvoiceEvents {
  [SVC_PAYMENT_INVOICE_INTERNAL_EVENT_FIND_ONE]: PaymentInvoiceFindOneInput;
  [SVC_PAYMENT_INVOICE_INTERNAL_EVENT_FIND_MANY]: PaymentInvoiceFindManyInput;
  [SVC_PAYMENT_INVOICE_INTERNAL_EVENT_CREATE_ONE]: PaymentInvoiceCreateInput;
  [SVC_PAYMENT_INVOICE_INTERNAL_EVENT_INVOICE_CREATED]: PaymentInvoiceWire;
}
