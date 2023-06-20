export const SVC_SUBSCRIPTION_GROUP_NAME = 'SubscriptionGroupService';
export const SVC_SUBSCRIPTION_GROUP_WEB_PORT = 3026;
export const SVC_SUBSCRIPTION_GROUP_WEB_ADDRESS =
  process.env.SVC_SUBSCRIPTION_GROUP_WEB_ADDRESS ??
  `http://localhost:${SVC_SUBSCRIPTION_GROUP_WEB_PORT}/graphql`;

export const SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_CREATE_ONE =
  'subscriptionGroupCreateOne';
export const SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_ONE =
  'subscriptionGroupFindOne';
export const SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_FIND_MANY =
  'subscriptionGroupFindMany';
export const SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_UPDATE_ONE =
  'subscriptionGroupUpdateOne';
export const SVC_SUBSCRIPTION_GROUP_INTERNAL_EVENT_DELETE_ONE =
  'subscriptionGroupDeleteOne';
