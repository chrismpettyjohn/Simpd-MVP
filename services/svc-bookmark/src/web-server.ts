import 'dotenv/config';
import {BookmarkModule} from './bookmark.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_BOOKMARK_WEB_PORT} from 'libs/lib-client/src/svc-bookmark/bookmark.const';

bootstrapDynamicService(BookmarkModule, SVC_BOOKMARK_WEB_PORT);
