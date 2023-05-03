import {Inject} from '@nestjs/common';
import {SVC_REACTION_NAME} from './reaction.const';
import {ClientProxy} from '@nestjs/microservices';

export const UseReactionClient: () => ClientProxy = () =>
  Inject(SVC_REACTION_NAME) as any;
