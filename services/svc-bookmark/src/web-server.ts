import 'dotenv/config';
import {BookmarkModule} from './bookmark.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {
  SVC_BOOKMARK_NAME,
  SVC_BOOKMARK_WEB_PORT,
} from 'libs/lib-client/src/svc-bookmark/bookmark.const';

dynamicServiceBootstrap(
  SVC_BOOKMARK_NAME,
  BookmarkModule,
  SVC_BOOKMARK_WEB_PORT,
  'bookmark'
);
