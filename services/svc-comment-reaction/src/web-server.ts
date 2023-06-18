import 'dotenv/config';
import {CommentReactionModule} from './comment-reaction.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {
  SVC_COMMENT_REACTION_NAME,
  SVC_COMMENT_REACTION_WEB_PORT,
} from '@simpd/lib-client';

dynamicServiceBootstrap(
  SVC_COMMENT_REACTION_NAME,
  CommentReactionModule,
  SVC_COMMENT_REACTION_WEB_PORT,
  'comment-reaction'
);
