export const SVC_PAYMENT_TRANSACTION_NAME = 'PaymentTransactionService';
export const SVC_PAYMENT_TRANSACTION_WEB_PORT = 3050;
export const SVC_PAYMENT_TRANSACTION_WEB_ADDRESS =
  process.env.SVC_PAYMENT_TRANSACTION_WEB_ADDRESS ??
  `http://localhost:${SVC_PAYMENT_TRANSACTION_WEB_PORT}/graphql`;

export const SVC_PAYMENT_TRANSACTION_INTERNAL_EVENT_FIND_ONE =
  'messageFindOneByID';
