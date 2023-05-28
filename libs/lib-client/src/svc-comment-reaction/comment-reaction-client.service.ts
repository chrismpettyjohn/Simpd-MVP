import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  CommentReactionFindManyInput,
  CommentReactionWire,
} from './comment-reaction-client.types';
import {
  SVC_COMMENT_REACTION_INTERNAL_EVENT_FIND_MANY,
  SVC_COMMENT_REACTION_NAME,
} from './comment-reaction.const';

@Injectable()
export class CommentReactionClientService {
  constructor(@Inject(SVC_COMMENT_REACTION_NAME) private client: ClientProxy) {}

  async findMany(
    filter: CommentReactionFindManyInput
  ): Promise<CommentReactionWire[]> {
    const matchingCommentReactions$ = this.client.send(
      SVC_COMMENT_REACTION_INTERNAL_EVENT_FIND_MANY,
      filter
    );
    return await lastValueFrom(matchingCommentReactions$);
  }
}
