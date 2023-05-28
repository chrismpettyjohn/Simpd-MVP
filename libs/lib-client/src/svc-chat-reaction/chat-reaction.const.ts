export const SVC_CHAT_REACTION_NAME = 'ChatReactionService';
export const SVC_CHAT_REACTION_WEB_PORT = 3036;
export const SVC_CHAT_REACTION_WEB_ADDRESS =
  process.env.SVC_CHAT_REACTION_WEB_ADDRESS ??
  `http://localhost:${SVC_CHAT_REACTION_WEB_PORT}/graphql`;

export const SVC_CHAT_REACTION_INTERNAL_EVENT_FIND_MANY =
  'chatReactionFindMany';
