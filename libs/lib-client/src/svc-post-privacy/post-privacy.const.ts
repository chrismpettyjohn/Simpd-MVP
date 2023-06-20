export const SVC_POST_PRIVACY_NAME = 'PostPrivacyService';
export const SVC_POST_PRIVACY_WEB_PORT = 68;
export const SVC_POST_PRIVACY_WEB_ADDRESS =
  process.env.SVC_POST_PRIVACY_WEB_ADDRESS ??
  `http://localhost:${SVC_POST_PRIVACY_WEB_PORT}/graphql`;
