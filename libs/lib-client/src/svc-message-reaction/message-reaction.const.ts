export const SVC_MESSAGE_REACTION_NAME = 'MessageReactionService';
export const SVC_MESSAGE_REACTION_WEB_PORT = 3038;
export const SVC_MESSAGE_REACTION_WEB_ADDRESS =
  process.env.SVC_MESSAGE_REACTION_WEB_ADDRESS ??
  `http://localhost:${SVC_MESSAGE_REACTION_WEB_PORT}/graphql`;

export const SVC_MESSAGE_REACTION_INTERNAL_EVENT_FIND_MANY =
  'messageReactionFindMany';
