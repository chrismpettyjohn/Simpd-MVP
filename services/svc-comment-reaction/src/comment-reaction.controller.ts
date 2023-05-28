import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {CommentReactionService} from './comment-reaction.service';
import {
  CommentReactionFindManyInput,
  CommentReactionWire,
  SVC_COMMENT_REACTION_INTERNAL_EVENT_FIND_MANY,
} from '@simpd/lib-client';
import {commentReactionWireToCommentReactionWire} from './comment-reaction.wire';

@Controller()
export class CommentReactionController {
  constructor(
    private readonly commentReactionService: CommentReactionService
  ) {}

  @MessagePattern(SVC_COMMENT_REACTION_INTERNAL_EVENT_FIND_MANY)
  async commentReactionFindMany(
    filter: CommentReactionFindManyInput
  ): Promise<CommentReactionWire[]> {
    const matchingReactions = await this.commentReactionService.findMany(
      filter
    );
    return matchingReactions.map(commentReactionWireToCommentReactionWire);
  }
}
