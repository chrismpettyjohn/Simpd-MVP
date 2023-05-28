import 'dotenv/config';
import {ChatReactionModule} from './chat-reaction.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_CHAT_REACTION_WEB_PORT} from '@simpd/lib-client';

bootstrapDynamicService(ChatReactionModule, SVC_CHAT_REACTION_WEB_PORT);
