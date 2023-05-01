import { join } from 'path';

const SERVICE_PACKAGE_PREFIX = 'simpd.';

export function resolveProto(serviceName: string): string {
  const serviceNameWithoutPrefix = serviceName.replace(
    SERVICE_PACKAGE_PREFIX,
    ''
  );
  return join(
    __dirname,
    '..',
    '..',
    '..',
    'libs',
    'simpd-lib-client',
    'src',
    `simpd-api-${serviceNameWithoutPrefix}/${serviceNameWithoutPrefix}.proto`
  );
}
