export const SVC_MESSAGE_NAME = 'MessageService';
export const SVC_MESSAGE_WEB_PORT = 3020;
export const SVC_MESSAGE_WEB_ADDRESS =
  process.env.SVC_MESSAGE_WEB_ADDRESS ??
  `http://localhost:${SVC_MESSAGE_WEB_PORT}/graphql`;

export const SVC_MESSAGE_INTERNAL_EVENT_FIND_ONE = 'messageFindOneByID';
