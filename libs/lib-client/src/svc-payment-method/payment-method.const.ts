export const SVC_PAYMENT_METHOD_NAME = 'PaymentMethodService';
export const SVC_PAYMENT_METHOD_WEB_PORT = 3052;
export const SVC_PAYMENT_METHOD_WEB_ADDRESS =
  process.env.SVC_PAYMENT_METHOD_WEB_ADDRESS ??
  `http://localhost:${SVC_PAYMENT_METHOD_WEB_PORT}/graphql`;

export const SVC_PAYMENT_METHOD_INTERNAL_EVENT_FIND_ONE =
  'paymentMethodFindOne';
export const SVC_PAYMENT_METHOD_INTERNAL_EVENT_CREATE_ONE =
  'paymentMethodCreateOne';
export const SVC_PAYMENT_METHOD_INTERNAL_EVENT_UPDATE_ONE =
  'paymentMethodUpdateOne';
export const SVC_PAYMENT_METHOD_INTERNAL_EVENT_DELETE_ONE =
  'paymentMethodDeleteOne';
