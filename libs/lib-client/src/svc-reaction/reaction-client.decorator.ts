import {Inject} from '@nestjs/common';
import {SVC_REACTION_NAME} from './reaction.const';

export const ReactionClient = () => Inject(SVC_REACTION_NAME);
