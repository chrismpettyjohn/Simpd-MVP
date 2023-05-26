import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {PostReactionService} from './post-reaction.service';
import {
  PostReactionFindManyInput,
  PostReactionWire,
  SVC_POST_REACTION_INTERNAL_EVENT_FIND_MANY,
} from '@simpd/lib-client';
import {postReactionWireToPostReactionWire} from './post-reaction.wire';

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
}
