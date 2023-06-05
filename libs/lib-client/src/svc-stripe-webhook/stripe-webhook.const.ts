export const SVC_STRIPE_WEBHOOK_NAME = 'StripeWebhookService';
export const SVC_STRIPE_WEBHOOK_WEB_PORT = 3054;
export const SVC_STRIPE_WEBHOOK_WEB_ADDRESS =
  process.env.SVC_STRIPE_WEBHOOK_WEB_ADDRESS ??
  `http://localhost:${SVC_STRIPE_WEBHOOK_WEB_PORT}`;
