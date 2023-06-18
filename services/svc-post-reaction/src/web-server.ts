import 'dotenv/config';
import {PostReactionModule} from './post-reaction.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_POST_REACTION_WEB_PORT} from '@simpd/lib-client';

dynamicServiceBootstrap(
  PostReactionModule,
  SVC_POST_REACTION_WEB_PORT,
  'post-reaction'
);
