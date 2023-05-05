export const SVC_TAG_NAME = 'TagService';
export const SVC_TAG_WEB_PORT = 3012;
export const SVC_TAG_WEB_ADDRESS =
  process.env.SVC_TAG_WEB_ADDRESS ??
  `http://localhost:${SVC_TAG_WEB_PORT}/graphql`;

export const SVC_TAG_INTERNAL_EVENT_FIND_ONE_BY_ID = 'profileFindOneByID';