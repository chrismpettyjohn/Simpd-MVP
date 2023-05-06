export const SVC_COMMENT_NAME = 'CommentService';
export const SVC_COMMENT_WEB_PORT = 3016;
export const SVC_COMMENT_WEB_ADDRESS =
  process.env.SVC_COMMENT_WEB_ADDRESS ??
  `http://localhost:${SVC_COMMENT_WEB_PORT}/graphql`;

export const SVC_COMMENT_INTERNAL_EVENT_FIND_ONE = 'commentFindOneByID';
