import { lastValueFrom } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PostCommentFindOneInput, PostCommentWire } from './post-comment-client.types';
import { SVC_POST_COMMENT_INTERNAL_EVENT_FIND_ONE, SVC_POST_COMMENT_NAME } from './post-comment.const';

@Injectable()
export class PostCommentClientService {
  constructor(@Inject(SVC_POST_COMMENT_NAME) private client: ClientProxy) { }

  async findOne(input: PostCommentFindOneInput): Promise<PostCommentWire> {
    const matchingPostComment$ = this.client.send(
      SVC_POST_COMMENT_INTERNAL_EVENT_FIND_ONE,
      input
    );
    return await lastValueFrom(matchingPostComment$);
  }
}
