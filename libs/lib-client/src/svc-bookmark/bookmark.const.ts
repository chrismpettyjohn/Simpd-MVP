export const SVC_BOOKMARK_NAME = 'BookmarkService';
export const SVC_BOOKMARK_WEB_PORT = 3030;
export const SVC_BOOKMARK_WEB_ADDRESS =
  process.env.SVC_BOOKMARK_WEB_ADDRESS ??
  `http://localhost:${SVC_BOOKMARK_WEB_PORT}/graphql`;

export const SVC_BOOKMARK_INTERNAL_EVENT_FIND_ONE = 'bookmarkFindOne';
export const SVC_BOOKMARK_INTERNAL_EVENT_FIND_MANY = 'bookmarkFindMany';

export const SVC_BOOKMARK_COLLECTION_INTERNAL_EVENT_FIND_ONE =
  'bookmarkCollectionFindOne';
