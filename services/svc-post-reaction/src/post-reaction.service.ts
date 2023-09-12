import {Injectable} from '@nestjs/common';
import {SVC_POST_NAME} from 'libs/lib-client/src/svc-post/post.const';
import {
  BaseReactionClientService,
  PostReactionClientService,
  ReactionClientService,
  ReactionCreateOneInput,
  ReactionWire,
} from '@simpd/lib-client';

@Injectable()
export class PostReactionService extends BaseReactionClientService {
  constructor(
    reactionClientService: ReactionClientService,
    private readonly postReactionClientService: PostReactionClientService
  ) {
    super(SVC_POST_NAME, reactionClientService);
  }
  async createOne(
    input: Omit<ReactionCreateOneInput, 'serviceKey'>
  ): Promise<ReactionWire> {
    const newPostReaction = await super.createOne(input);
    await this.postReactionClientService._onCreated({
      postReactionID: newPostReaction.id!,
    });
    return newPostReaction;
  }
}
