import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  PostFindOneInput,
  PostWasCreatedInternalMessage,
  PostWire,
} from './post-client.types';
import {
  INTERNAL_MESSAGE_SVC_POST_WAS_CREATED,
  SVC_POST_INTERNAL_EVENT_FIND_ONE,
  SVC_POST_NAME,
} from './post.const';

@Injectable()
export class PostClientService {
  constructor(@Inject(SVC_POST_NAME) private client: ClientProxy) {}

  async findOne(input: PostFindOneInput): Promise<PostWire> {
    const matchingPost$ = this.client.send(
      SVC_POST_INTERNAL_EVENT_FIND_ONE,
      input
    );
    return await lastValueFrom(matchingPost$);
  }

  async _onCreated(input: PostWasCreatedInternalMessage): Promise<void> {
    await this.client.send(INTERNAL_MESSAGE_SVC_POST_WAS_CREATED, input);
  }
}
