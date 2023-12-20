export const SVC_ALBUM_NAME = 'AlbumService';
export const SVC_ALBUM_WEB_PORT = 3072;
export const SVC_ALBUM_WEB_ADDRESS =
  process.env.SVC_ALBUM_WEB_ADDRESS ??
  `http://localhost:${SVC_ALBUM_WEB_PORT}/graphql`;

export const SVC_ALBUM_INTERNAL_EVENT_FIND_ONE = 'albumFindOne';
export const SVC_ALBUM_INTERNAL_EVENT_FIND_MANY = 'albumFindMany';
