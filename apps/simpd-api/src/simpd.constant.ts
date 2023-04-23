export function getEnvOrFail(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment token ${key}`);
  }

  return value;
}

export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_PASS = process.env.DATABASE_PASS;
export const DATABASE_USER = process.env.DATABASE_USER;

export const GRAPHQL_PLAYGROUND = !!process.env.GRAPHQL_PLAYGROUND;

export const JWT_SECRET: string = getEnvOrFail('JWT_SECRET');
export const JWT_EXPIRATION_IN_MS = Number(
  getEnvOrFail('JWT_EXPIRATION_IN_MS')
);
