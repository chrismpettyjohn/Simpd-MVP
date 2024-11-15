import 'dotenv/config';

function getEnvironmentValue<T extends any>(key: string): T {
  const value: T = process.env[key] as any;
  if (!value) {
    throw new Error(`Environment value ${key} does not exist`);
  }
  return value;
}

export const DATABASE_SSL = getEnvironmentValue('DATABASE_SSL') === 'true';
export const DATABASE_HOST = getEnvironmentValue('DATABASE_HOST');
export const DATABASE_PORT = getEnvironmentValue('DATABASE_PORT');
export const DATABASE_NAME = getEnvironmentValue('DATABASE_NAME');
export const DATABASE_USERNAME = getEnvironmentValue('DATABASE_USER');
export const DATABASE_PASSWORD = getEnvironmentValue('DATABASE_PASS');
