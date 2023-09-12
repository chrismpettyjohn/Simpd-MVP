import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  PostReactionFindManyInput,
  PostReactionFindOneInput,
  PostReactionWasCreatedInternalMessage,
  PostReactionWire,
} from './post-reaction-client.types';
import {
  INTERNAL_MESSAGE_SVC_POST_REACTION_WAS_CREATED,
  SVC_POST_REACTION_INTERNAL_EVENT_FIND_MANY,
  SVC_POST_REACTION_INTERNAL_EVENT_FIND_ONE,
  SVC_POST_REACTION_NAME,
} from './post-reaction.const';

@Injectable()
export class PostReactionClientService {
  constructor(@Inject(SVC_POST_REACTION_NAME) private client: ClientProxy) {}

  async findMany(
    filter: PostReactionFindManyInput
  ): Promise<PostReactionWire[]> {
    const matchingPostReactions$ = this.client.send(
      SVC_POST_REACTION_INTERNAL_EVENT_FIND_MANY,
      filter
    );
    return await lastValueFrom(matchingPostReactions$);
  }

  async findOne(filter: PostReactionFindOneInput): Promise<PostReactionWire> {
    const matchingPostReaction$ = this.client.send(
      SVC_POST_REACTION_INTERNAL_EVENT_FIND_ONE,
      filter
    );
    return await lastValueFrom(matchingPostReaction$);
  }
  async _onCreated(
    input: PostReactionWasCreatedInternalMessage
  ): Promise<void> {
    await this.client.send(
      INTERNAL_MESSAGE_SVC_POST_REACTION_WAS_CREATED,
      input
    );
  }
}
