import {Injectable} from '@nestjs/common';
import {
  BaseReactionClientService,
  ReactionClientService,
  SVC_CHAT_REACTION_NAME,
} from '@simpd/lib-client';

@Injectable()
export class ChatReactionService extends BaseReactionClientService {
  constructor(reactionClientService: ReactionClientService) {
    super(SVC_CHAT_REACTION_NAME, reactionClientService);
  }
}
