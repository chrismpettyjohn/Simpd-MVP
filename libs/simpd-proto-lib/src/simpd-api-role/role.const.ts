import {resolveProto} from '../helpers';

export const ROLE_SERVICE_NAME = 'RoleService';
export const ROLE_SERVICE_WEB_SERVER_PORT = 3002;
export const ROLE_SERVICE_MICROSERVICE_PORT = 3003;
export const ROLE_SERVICE_PACKAGE = 'simpd.role';
export const ROLE_SERVICE_PROTO = resolveProto(ROLE_SERVICE_PACKAGE);
export const ROLE_SERVICE_WEB_ADDRESS =
  process.env.ROLE_SERVICE_WEB_ADDRESS ??
  `http://localhost:${ROLE_SERVICE_WEB_SERVER_PORT}/graphql`;
export const ROLE_SERVICE_MICROSERVICE_ADDRESS =
  process.env.ROLE_SERVICE_MICROSERVICE_ADDRESS ??
  `grpc://localhost:${ROLE_SERVICE_MICROSERVICE_PORT}`;
