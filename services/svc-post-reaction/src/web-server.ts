import 'dotenv/config';
import {PostReactionModule} from './post-reaction.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_POST_REACTION_WEB_PORT} from '@simpd/lib-client';

bootstrapDynamicService(
  PostReactionModule,
  SVC_POST_REACTION_WEB_PORT,
  'post-reaction'
);
