import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  CommentFindOneInput,
  CommentMutationResponse,
  CommentWire,
} from './comment-client.types';
import {
  SVC_COMMENT_INTERNAL_EVENT_CREATE_ONE,
  SVC_COMMENT_INTERNAL_EVENT_DELETE_ONE,
  SVC_COMMENT_INTERNAL_EVENT_FIND_MANY,
  SVC_COMMENT_INTERNAL_EVENT_FIND_ONE,
  SVC_COMMENT_INTERNAL_EVENT_UPDATE_ONE,
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

  async findMany(input: CommentFindOneInput): Promise<CommentWire[]> {
    const matchingComment$ = this.client.send(
      SVC_COMMENT_INTERNAL_EVENT_FIND_MANY,
      input
    );
    return await lastValueFrom(matchingComment$);
  }

  async createOne(input: CommentFindOneInput): Promise<CommentWire> {
    const matchingComment$ = this.client.send(
      SVC_COMMENT_INTERNAL_EVENT_CREATE_ONE,
      input
    );
    return await lastValueFrom(matchingComment$);
  }

  async updateOne(
    input: CommentFindOneInput
  ): Promise<CommentMutationResponse> {
    const changesSaved = this.client.send(
      SVC_COMMENT_INTERNAL_EVENT_UPDATE_ONE,
      input
    );
    return await lastValueFrom(changesSaved);
  }

  async deleteOne(
    input: CommentFindOneInput
  ): Promise<CommentMutationResponse> {
    const commentDeleted = this.client.send(
      SVC_COMMENT_INTERNAL_EVENT_DELETE_ONE,
      input
    );
    return await lastValueFrom(commentDeleted);
  }
}
