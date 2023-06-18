import 'dotenv/config';
import {MessageReactionModule} from './message-reaction.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_MESSAGE_REACTION_WEB_PORT} from '@simpd/lib-client';

bootstrapDynamicService(
  MessageReactionModule,
  SVC_MESSAGE_REACTION_WEB_PORT,
  'message-reaction'
);
