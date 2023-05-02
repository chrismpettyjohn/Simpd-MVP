export const SVC_POST_NAME = 'PostService';
export const SVC_POST_WEB_PORT = 3010;
export const SVC_POST_WEB_ADDRESS =
  process.env.SVC_POST_WEB_ADDRESS ??
  `http://localhost:${SVC_POST_WEB_PORT}/graphql`;

export const SVC_POST_INTERNAL_EVENT_FIND_ONE_BY_ID = 'profileFindOneByID';
