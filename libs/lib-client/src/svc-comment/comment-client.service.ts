import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {CommentFindOneInput, CommentWire} from './comment-client.types';
import {
  SVC_COMMENT_INTERNAL_EVENT_FIND_ONE,
  SVC_COMMENT_NAME,
} from './comment.const';

@Injectable()
export class CommentClientService {
  constructor(@Inject(SVC_COMMENT_NAME) private client: ClientProxy) {}

  async findOne(input: CommentFindOneInput): Promise<CommentWire> {
    const matchingComment$ = this.client.send(
      SVC_COMMENT_INTERNAL_EVENT_FIND_ONE,
      input
    );
    return await lastValueFrom(matchingComment$);
  }
}
