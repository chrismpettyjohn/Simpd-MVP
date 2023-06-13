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
