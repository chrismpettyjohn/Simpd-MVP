export const SVC_MESSAGE_REACTION_NAME = 'MessageReactionService';
export const SVC_MESSAGE_REACTION_WEB_PORT = 3038;
export const SVC_MESSAGE_REACTION_WEB_ADDRESS =
  process.env.SVC_MESSAGE_REACTION_WEB_ADDRESS ??
  `http://localhost:${SVC_MESSAGE_REACTION_WEB_PORT}/graphql`;

export const SVC_MESSAGE_REACTION_INTERNAL_EVENT_FIND_MANY =
  'messageReactionFindMany';

export const SVC_MESSAGE_REACTION_INTERNAL_EVENT_FIND_ONE =
  'messageReactionFindOne';

export const INTERNAL_MESSAGE_SVC_MESSAGE_REACTION_WAS_CREATED =
  'INTERNAL_MESSAGE_SVC_MESSAGE_REACTION_WAS_CREATED';
