export const ROLE_SERVICE_NAME = 'RoleService';
export const ROLE_SERVICE_WEB_SERVER_PORT = 3002;
export const ROLE_SERVICE_MICROSERVICE_PORT = 4222;
export const ROLE_SERVICE_WEB_ADDRESS =
  process.env.ROLE_SERVICE_WEB_ADDRESS ??
  `https://localhost:${ROLE_SERVICE_WEB_SERVER_PORT}/graphql`;
export const ROLE_SERVICE_MICROSERVICE_HOST =
  process.env.ROLE_SERVICE_MICROSERVICE_HOST ?? 'localhost';

export const ROLE_SERVICE_INTERNAL_EVENT_FIND_ONE_BY_ID = 'roleFindOneByID';
