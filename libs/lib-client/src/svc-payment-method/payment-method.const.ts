export const SVC_PAYMENT_METHOD_NAME = 'PaymentMethodService';
export const SVC_PAYMENT_METHOD_WEB_PORT = 3044;
export const SVC_PAYMENT_METHOD_WEB_ADDRESS =
  process.env.SVC_PAYMENT_METHOD_WEB_ADDRESS ??
  `http://localhost:${SVC_PAYMENT_METHOD_WEB_PORT}/graphql`;

export const SVC_PAYMENT_METHOD_INTERNAL_EVENT_FIND_ONE = 'messageFindOneByID';
