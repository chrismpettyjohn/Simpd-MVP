export const SVC_POST_COMMENT_NAME = 'PostCommentService';
export const SVC_POST_COMMENT_WEB_PORT = 3032;
export const SVC_POST_COMMENT_WEB_ADDRESS =
  process.env.SVC_POST_COMMENT_WEB_ADDRESS ??
  `http://localhost:${SVC_POST_COMMENT_WEB_PORT}/graphql`;

export const SVC_POST_COMMENT_INTERNAL_EVENT_FIND_ONE = 'postCommentFindOne';
