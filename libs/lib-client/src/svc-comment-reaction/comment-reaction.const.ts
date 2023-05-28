export const SVC_COMMENT_REACTION_NAME = 'CommentReactionService';
export const SVC_COMMENT_REACTION_WEB_PORT = 3036;
export const SVC_COMMENT_REACTION_WEB_ADDRESS =
  process.env.SVC_COMMENT_REACTION_WEB_ADDRESS ??
  `http://localhost:${SVC_COMMENT_REACTION_WEB_PORT}/graphql`;

export const SVC_COMMENT_REACTION_INTERNAL_EVENT_FIND_MANY =
  'commentReactionFindMany';
