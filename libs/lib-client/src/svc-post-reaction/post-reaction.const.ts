export const SVC_POST_REACTION_NAME = 'PostReactionService';
export const SVC_POST_REACTION_WEB_PORT = 3034;
export const SVC_POST_REACTION_WEB_ADDRESS =
  process.env.SVC_POST_REACTION_WEB_ADDRESS ??
  `http://localhost:${SVC_POST_REACTION_WEB_PORT}/graphql`;
