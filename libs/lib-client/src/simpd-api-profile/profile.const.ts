export const SVC_PROFILE_NAME = 'ProfileService';
export const SVC_PROFILE_WEB_SERVER_PORT = 3008;
export const SVC_PROFILE_WEB_SERVER_ADDRESS =
  process.env.SVC_PROFILE_WEB_SERVER_ADDRESS ??
  `https://localhost:${SVC_PROFILE_WEB_SERVER_PORT}/graphql`;

export const SVC_PROFILE_INTERNAL_EVENT_FIND_ONE_BY_ID = 'profileFindOneByID';
