export const SVC_FORM_NAME = 'FormService';
export const SVC_FORM_WEB_PORT = 3022;
export const SVC_FORM_WEB_ADDRESS =
  process.env.SVC_FORM_WEB_ADDRESS ??
  `http://localhost:${SVC_FORM_WEB_PORT}/graphql`;

export const SVC_FORM_INTERNAL_EVENT_FIND_ONE = 'formFindOneByID';
