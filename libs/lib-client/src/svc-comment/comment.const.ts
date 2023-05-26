export const SVC_COMMENT_NAME = 'CommentService';
export const SVC_COMMENT_WEB_PORT = 3016;
export const SVC_COMMENT_WEB_ADDRESS =
  process.env.SVC_COMMENT_WEB_ADDRESS ??
  `http://localhost:${SVC_COMMENT_WEB_PORT}/graphql`;

export const SVC_COMMENT_INTERNAL_EVENT_FIND_ONE = 'commentFindOne';
export const SVC_COMMENT_INTERNAL_EVENT_FIND_MANY = 'commentFindMany';
export const SVC_COMMENT_INTERNAL_EVENT_CREATE_ONE = 'commentCreateOne';
export const SVC_COMMENT_INTERNAL_EVENT_UPDATE_ONE = 'commentUpdateOne';
export const SVC_COMMENT_INTERNAL_EVENT_DELETE_ONE = 'commentDeleteOne';
