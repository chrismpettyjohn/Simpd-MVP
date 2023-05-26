import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  PostReactionFindManyInput,
  PostReactionWire,
} from './post-reaction-client.types';
import {
  SVC_POST_REACTION_INTERNAL_EVENT_FIND_MANY,
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
}
