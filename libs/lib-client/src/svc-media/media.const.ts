export const SVC_MEDIA_NAME = 'MediaService';
export const SVC_MEDIA_WEB_PORT = 3012;
export const SVC_MEDIA_WEB_ADDRESS =
  process.env.SVC_MEDIA_WEB_ADDRESS ??
  `http://localhost:${SVC_MEDIA_WEB_PORT}/graphql`;

export const SVC_MEDIA_INTERNAL_EVENT_FIND_ONE_BY_ID = 'profileFindOneByID';
