import {join} from 'path';

export const DATABASE_SSL = !!process.env.DATABASE_SSL;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_PORT = process.env.DATABASE_PORT;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

export const ROLE_SERVICE_NAME = 'RoleService';
export const USER_SERVICE_NAME = 'UserService';
export const SESSION_SERVICE_NAME = 'SessionService';

export const ROLE_SERVICE_PORT = 3001;
export const USER_SERVICE_PORT = 3002;
export const SESSION_SERVICE_PORT = 3003;

const SERVICE_PACKAGE_PREFIX = 'simpd.';

export const USER_SERVICE_PACKAGE = 'simpd.user';
export const ROLE_SERVICE_PACKAGE = 'simpd.role';
export const SESSION_SERVICE_PACKAGE = 'simpd.session';

function resolveProto(serviceName: string): string {
  const serviceNameWithoutPrefix = serviceName.replace(
    SERVICE_PACKAGE_PREFIX,
    ''
  );
  return join(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    'libs',
    'simpd-proto-lib',
    'src',
    `simpd-api-${serviceNameWithoutPrefix}/${serviceNameWithoutPrefix}.proto`
  );
}

export const USER_SERVICE_PROTO = resolveProto(USER_SERVICE_PACKAGE);
export const ROLE_SERVICE_PROTO = resolveProto(ROLE_SERVICE_PACKAGE);
export const SESSION_SERVICE_PROTO = resolveProto(SESSION_SERVICE_PACKAGE);
