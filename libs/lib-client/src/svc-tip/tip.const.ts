export const SVC_TIP_NAME = 'TipService';
export const SVC_TIP_WEB_PORT = 3056;
export const SVC_TIP_WEB_ADDRESS =
  process.env.SVC_TIP_WEB_ADDRESS ??
  `http://localhost:${SVC_TIP_WEB_PORT}/graphql`;

export const SVC_TIP_INTERNAL_EVENT_FIND_ONE = 'tipFindOne';
export const SVC_TIP_INTERNAL_EVENT_FIND_MANY = 'tipFindMany';
export const SVC_TIP_INTERNAL_EVENT_CREATE_ONE = 'tipCreateOne';

export const INTERNAL_MESSAGE_SVC_TIP_WAS_CREATED =
  'INTERNAL_MESSAGE_SVC_TIP_WAS_CREATED';
