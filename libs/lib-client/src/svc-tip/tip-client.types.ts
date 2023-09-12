export interface TipWire {
  id: number;
  userID: number;
  profileID: number;
  receivingUserID: number;
  receivingProfileID: number;
  paymentInvoiceID: number;
  amount: number;
  message: string;
}

export interface TipFindOneInput {
  id?: number;
  userID?: number;
  profileID?: number;
  receivingUserID?: number;
  receivingProfileID?: number;
  paymentInvoiceID?: number;
}

export interface TipFindManyInput {
  ids?: number[];
  userIDs?: number[];
  profileIDs?: number[];
  receivingUserIDs?: number[];
  receivingProfileIDs?: number[];
  paymentInvoiceIDs?: number[];
}

export interface TipCreateInput {
  userID: number;
  profileID: number;
  receivingUserID: number;
  receivingProfileID: number;
  paymentInvoiceID: number;
  amount: number;
  message: string;
}

export interface TipWasCreatedInternalMessage {
  tipID: number;
}
