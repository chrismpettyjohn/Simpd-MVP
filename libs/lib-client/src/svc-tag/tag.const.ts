export const SVC_TAG_NAME = 'TagService';
export const SVC_TAG_WEB_PORT = 3014;
export const SVC_TAG_WEB_ADDRESS =
  process.env.SVC_TAG_WEB_ADDRESS ??
  `http://localhost:${SVC_TAG_WEB_PORT}/graphql`;

export const SVC_TAG_INTERNAL_EVENT_FIND_ONE = 'tagFindOneByID';
