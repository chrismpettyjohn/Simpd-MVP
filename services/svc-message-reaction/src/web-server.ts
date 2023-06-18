import 'dotenv/config';
import {MessageReactionModule} from './message-reaction.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_MESSAGE_REACTION_WEB_PORT} from '@simpd/lib-client';

dynamicServiceBootstrap(
  MessageReactionModule,
  SVC_MESSAGE_REACTION_WEB_PORT,
  'message-reaction'
);
