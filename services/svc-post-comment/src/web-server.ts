import 'dotenv/config';
import {PostCommentModule} from './post-comment.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_POST_COMMENT_WEB_PORT} from '@simpd/lib-client';

bootstrapDynamicService(PostCommentModule, SVC_POST_COMMENT_WEB_PORT);
