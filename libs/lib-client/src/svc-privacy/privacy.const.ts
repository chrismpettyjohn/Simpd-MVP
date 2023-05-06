export const SVC_PRIVACY_NAME = 'PrivacyService';
export const SVC_PRIVACY_WEB_PORT = 3028;
export const SVC_PRIVACY_WEB_ADDRESS =
  process.env.SVC_PRIVACY_WEB_ADDRESS ??
  `http://localhost:${SVC_PRIVACY_WEB_PORT}/graphql`;

export const SVC_PRIVACY_INTERNAL_EVENT_FIND_ONE_BY_ID = 'privacyFindOneByID';
