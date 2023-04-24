import {join} from 'path';

export const DATABASE_SSL = !!process.env.DATABASE_SSL;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_PORT = process.env.DATABASE_PORT;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

export const ROLE_SERVICE_PORT = 3001;
export const USER_SERVICE_PORT = 3002;
export const SESSION_SERVICE_PORT = 3003;

export const USER_SERVICE_NAME = 'simpd.user';
export const ROLE_SERVICE_NAME = 'simpd.role';
export const SESSION_SERVICE_NAME = 'simpd.session';

export const USER_SERVICE_PROTO = join(
  __dirname,
  '..',
  '..',
  '..',
  '..',
  'proto',
  'simpd-api-user/user.proto'
);
export const ROLE_SERVICE_PROTO = join(
  __dirname,
  '..',
  '..',
  '..',
  '..',
  'proto',
  'simpd-api-role/role.proto'
);
export const SESSION_SERVICE_PROTO = join(
  __dirname,
  '..',
  '..',
  '..',
  '..',
  'proto',
  'simpd-api-session/session.proto'
);
