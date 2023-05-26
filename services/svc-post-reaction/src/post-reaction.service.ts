import {Injectable} from '@nestjs/common';
import {SVC_POST_NAME} from 'libs/lib-client/src/svc-post/post.const';
import {
  BaseReactionClientService,
  ReactionClientService,
} from '@simpd/lib-client';

@Injectable()
export class PostReactionService extends BaseReactionClientService {
  constructor(reactionClientService: ReactionClientService) {
    super(SVC_POST_NAME, reactionClientService);
  }
}
