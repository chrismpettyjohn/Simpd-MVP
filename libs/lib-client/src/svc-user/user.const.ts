export const SVC_USER_NAME = 'UserService';

export const SVC_USER_WEB_PORT = 3006;
export const SVC_USER_WEB_ADDRESS =
  process.env.SVC_USER_WEB_ADDRESS ??
  `http://localhost:${SVC_USER_WEB_PORT}/graphql`;

export const SVC_USER_INTERNAL_EVENT_FIND_ONE_BY_ID = 'userFindOneByID';
