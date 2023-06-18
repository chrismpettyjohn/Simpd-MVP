import 'dotenv/config';
import {CommentReactionModule} from './comment-reaction.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_COMMENT_REACTION_WEB_PORT} from '@simpd/lib-client';

bootstrapDynamicService(
  CommentReactionModule,
  SVC_COMMENT_REACTION_WEB_PORT,
  'comment-reaction'
);
