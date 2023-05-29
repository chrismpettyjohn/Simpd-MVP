import {Injectable} from '@nestjs/common';
import {
  BaseReactionClientService,
  ReactionClientService,
  SVC_MESSAGE_REACTION_NAME,
} from '@simpd/lib-client';

@Injectable()
export class MessageReactionService extends BaseReactionClientService {
  constructor(reactionClientService: ReactionClientService) {
    super(SVC_MESSAGE_REACTION_NAME, reactionClientService);
  }
}
