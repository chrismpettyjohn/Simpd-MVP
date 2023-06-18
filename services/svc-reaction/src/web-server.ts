import 'dotenv/config';
import {ReactionModule} from './reaction.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {SVC_REACTION_WEB_PORT} from 'libs/lib-client/src/svc-reaction/reaction.const';

dynamicServiceBootstrap(ReactionModule, SVC_REACTION_WEB_PORT, 'reaction');
