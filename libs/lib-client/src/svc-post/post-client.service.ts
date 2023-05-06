import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {PostFindOneInput, PostWire} from './post-client.types';
import {SVC_POST_INTERNAL_EVENT_FIND_ONE, SVC_POST_NAME} from './post.const';

@Injectable()
export class PostClientService {
  constructor(@Inject(SVC_POST_NAME) private client: ClientProxy) {}

  async findOne({id}: PostFindOneInput): Promise<PostWire> {
    const matchingPost$ = this.client.send(SVC_POST_INTERNAL_EVENT_FIND_ONE, {
      id,
    });
    return await lastValueFrom(matchingPost$);
  }
}
