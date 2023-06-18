import 'dotenv/config';
import {ReactionModule} from './reaction.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {
  SVC_REACTION_NAME,
  SVC_REACTION_WEB_PORT,
} from 'libs/lib-client/src/svc-reaction/reaction.const';

dynamicServiceBootstrap(
  SVC_REACTION_NAME,
  ReactionModule,
  SVC_REACTION_WEB_PORT,
  'reaction'
);
