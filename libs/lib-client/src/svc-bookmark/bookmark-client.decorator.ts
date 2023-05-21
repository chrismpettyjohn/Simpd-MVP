import {Inject} from '@nestjs/common';
import {SVC_BOOKMARK_NAME} from './bookmark.const';

export const BookmarkClient = () => Inject(SVC_BOOKMARK_NAME);
