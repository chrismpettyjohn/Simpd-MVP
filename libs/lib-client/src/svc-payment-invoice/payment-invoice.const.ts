export const SVC_PAYMENT_INVOICE_NAME = 'PaymentInvoiceService';
export const SVC_PAYMENT_INVOICE_WEB_PORT = 3042;
export const SVC_PAYMENT_INVOICE_WEB_ADDRESS =
  process.env.SVC_PAYMENT_INVOICE_WEB_ADDRESS ??
  `http://localhost:${SVC_PAYMENT_INVOICE_WEB_PORT}/graphql`;

export const SVC_PAYMENT_INVOICE_INTERNAL_EVENT_FIND_ONE = 'messageFindOneByID';