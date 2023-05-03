export const SVC_AWS_NAME = 'AWSService';
export const SVC_AWS_WEB_PORT = 30014;
export const SVC_AWS_WEB_ADDRESS =
  process.env.SVC_AWS_WEB_ADDRESS ??
  `http://localhost:${SVC_AWS_WEB_PORT}/graphql`;

export const SVC_AWS_INTERNAL_EVENT_FIND_ONE_BY_ID = 'awsFindOneByID';
