export const SVC_REACTION_NAME = 'ReactionService';
export const SVC_REACTION_WEB_PORT = 3018;
export const SVC_REACTION_WEB_ADDRESS =
  process.env.SVC_REACTION_WEB_ADDRESS ??
  `http://localhost:${SVC_REACTION_WEB_PORT}/graphql`;

export const SVC_REACTION_INTERNAL_EVENT_FIND_ONE = 'reactionFindOne';
export const SVC_REACTION_INTERNAL_EVENT_FIND_MANY = 'reactionFindMany';
export const SVC_REACTION_INTERNAL_EVENT_CREATE_ONE = 'reactionCreateOne';
export const SVC_REACTION_INTERNAL_EVENT_DELETE_ONE = 'reactionDeleteOne';
