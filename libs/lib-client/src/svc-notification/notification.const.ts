export const SVC_NOTIFICATION_NAME = 'NotificationService';
export const SVC_NOTIFICATION_WEB_PORT = 3044;
export const SVC_NOTIFICATION_WEB_ADDRESS =
  process.env.SVC_NOTIFICATION_WEB_ADDRESS ??
  `http://localhost:${SVC_NOTIFICATION_WEB_PORT}/graphql`;

export const SVC_NOTIFICATION_INTERNAL_EVENT_FIND_ONE =
  'notificationFindOneByID';
