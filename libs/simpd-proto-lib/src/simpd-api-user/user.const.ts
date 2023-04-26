import {resolveProto} from '../helpers';

export const USER_SERVICE_NAME = 'UserService';
export const USER_SERVICE_WEB_SERVER_PORT = 3005;
export const USER_SERVICE_MICROSERVICE_PORT = 3006;
export const USER_SERVICE_PACKAGE = 'simpd.user';
export const USER_SERVICE_PROTO = resolveProto(USER_SERVICE_PACKAGE);
export const USER_SERVICE_WEB_SERVER_ADDRESS =
  process.env.USER_SERVICE_WEB_SERVER_ADDRESS ??
  `http://localhost:${USER_SERVICE_WEB_SERVER_PORT}/graphql`;
export const USER_SERVICE_MICROSERVICE_ADDRESS =
  process.env.USER_SERVICE_MICROSERVICE_ADDRESS ??
  `grpc://http://localhost:${USER_SERVICE_WEB_SERVER_PORT}/graphql`;
