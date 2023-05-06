export const SVC_REPORT_NAME = 'ReportService';
export const SVC_REPORT_WEB_PORT = 3024;
export const SVC_REPORT_WEB_ADDRESS =
  process.env.SVC_REPORT_WEB_ADDRESS ??
  `http://localhost:${SVC_REPORT_WEB_PORT}/graphql`;

export const SVC_REPORT_INTERNAL_EVENT_FIND_ONE = 'reportFindOneByID';
