export const SVC_USER_NAME = 'UserService';

export const SVC_USER_WEB_SERVER_PORT = 3006;
export const SVC_USER_WEB_SERVER_ADDRESS =
  process.env.SVC_USER_WEB_SERVER_ADDRESS ??
  `https://localhost:${SVC_USER_WEB_SERVER_PORT}/graphql`;

export const SVC_USER_INTERNAL_EVENT_FIND_ONE_BY_ID = 'userFindOneByID';
