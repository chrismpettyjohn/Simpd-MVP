import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {PostReactionService} from './post-reaction.service';
import {postReactionWireToPostReactionWire} from './post-reaction.wire';
import {
  PostReactionFindManyInput,
  PostReactionFindOneInput,
  PostReactionWire,
  SVC_POST_REACTION_INTERNAL_EVENT_FIND_MANY,
  SVC_POST_REACTION_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';

@Controller()
export class PostReactionController {
  constructor(private readonly postReactionService: PostReactionService) {}

  @MessagePattern(SVC_POST_REACTION_INTERNAL_EVENT_FIND_MANY)
  async postReactionFindMany(
    filter: PostReactionFindManyInput
  ): Promise<PostReactionWire[]> {
    const matchingReactions = await this.postReactionService.findMany(filter);
    return matchingReactions.map(postReactionWireToPostReactionWire);
  }

  @MessagePattern(SVC_POST_REACTION_INTERNAL_EVENT_FIND_ONE)
  async postReactionFindOne(
    filter: PostReactionFindOneInput
  ): Promise<PostReactionWire> {
    const matchingReaction = await this.postReactionService.findOne(filter);
    return postReactionWireToPostReactionWire(matchingReaction);
  }
}
