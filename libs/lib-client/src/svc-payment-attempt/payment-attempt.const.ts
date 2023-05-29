export const SVC_PAYMENT_ATTEMPT_NAME = 'PaymentAttemptService';
export const SVC_PAYMENT_ATTEMPT_WEB_PORT = 3040;
export const SVC_PAYMENT_ATTEMPT_WEB_ADDRESS =
  process.env.SVC_PAYMENT_ATTEMPT_WEB_ADDRESS ??
  `http://localhost:${SVC_PAYMENT_ATTEMPT_WEB_PORT}/graphql`;

export const SVC_PAYMENT_ATTEMPT_INTERNAL_EVENT_FIND_ONE = 'messageFindOneByID';
