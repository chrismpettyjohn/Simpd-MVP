import 'dotenv/config';
import {PostCommentModule} from './post-comment.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_POST_COMMENT_WEB_PORT} from '@simpd/lib-client';

dynamicServiceBootstrap(
  PostCommentModule,
  SVC_POST_COMMENT_WEB_PORT,
  'post-comment'
);
