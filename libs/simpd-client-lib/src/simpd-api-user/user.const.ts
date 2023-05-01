export const USER_SERVICE_NAME = 'UserService';
export const USER_SERVICE_WEB_SERVER_PORT = 3006;
export const USER_SERVICE_MICROSERVICE_PORT = 4222;
export const USER_SERVICE_WEB_SERVER_ADDRESS =
  process.env.USER_SERVICE_WEB_SERVER_ADDRESS ??
  `https://localhost:${USER_SERVICE_WEB_SERVER_PORT}/graphql`;
export const USER_SERVICE_MICROSERVICE_HOST =
  process.env.USER_SERVICE_MICROSERVICE_HOST ?? 'localhost';
