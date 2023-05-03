import 'dotenv/config';
import {ReactionModule} from './reaction.module';
import {bootstrapDynamicService} from '@simpd/lib-api';
import {SVC_REACTION_WEB_PORT} from 'libs/lib-client/src/svc-reaction/reaction.const';

bootstrapDynamicService(ReactionModule, SVC_REACTION_WEB_PORT);
