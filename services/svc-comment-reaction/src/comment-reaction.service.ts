import {Injectable} from '@nestjs/common';
import {
  BaseReactionClientService,
  ReactionClientService,
  SVC_COMMENT_REACTION_NAME,
} from '@simpd/lib-client';

@Injectable()
export class CommentReactionService extends BaseReactionClientService {
  constructor(reactionClientService: ReactionClientService) {
    super(SVC_COMMENT_REACTION_NAME, reactionClientService);
  }
}
