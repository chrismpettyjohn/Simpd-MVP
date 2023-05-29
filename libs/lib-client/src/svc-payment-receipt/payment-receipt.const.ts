export const SVC_PAYMENT_RECEIPT_NAME = 'PaymentReceiptService';
export const SVC_PAYMENT_RECEIPT_WEB_PORT = 3046;
export const SVC_PAYMENT_RECEIPT_WEB_ADDRESS =
  process.env.SVC_PAYMENT_RECEIPT_WEB_ADDRESS ??
  `http://localhost:${SVC_PAYMENT_RECEIPT_WEB_PORT}/graphql`;

export const SVC_PAYMENT_RECEIPT_INTERNAL_EVENT_FIND_ONE = 'messageFindOneByID';
