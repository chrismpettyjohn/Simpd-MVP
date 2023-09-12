import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  PostCommentCreateOneInput,
  PostCommentFindManyInput,
  PostCommentFindOneInput,
  PostCommentMutationResponse,
  PostCommentUpdateOneInput,
  PostCommentWasCreatedInternalMessage,
  PostCommentWire,
} from './post-comment-client.types';
import {
  INTERNAL_MESSAGE_SVC_COMMENT_WAS_CREATED,
  SVC_POST_COMMENT_INTERNAL_EVENT_CREATE_ONE,
  SVC_POST_COMMENT_INTERNAL_EVENT_DELETE_ONE,
  SVC_POST_COMMENT_INTERNAL_EVENT_FIND_MANY,
  SVC_POST_COMMENT_INTERNAL_EVENT_FIND_ONE,
  SVC_POST_COMMENT_INTERNAL_EVENT_UPDATE_ONE,
  SVC_POST_COMMENT_NAME,
} from './post-comment.const';

@Injectable()
export class PostCommentClientService {
  constructor(@Inject(SVC_POST_COMMENT_NAME) private client: ClientProxy) {}

  async findOne(filter: PostCommentFindOneInput): Promise<PostCommentWire> {
    const matchingPostComment$ = this.client.send(
      SVC_POST_COMMENT_INTERNAL_EVENT_FIND_ONE,
      filter
    );
    return await lastValueFrom(matchingPostComment$);
  }
  async findMany(filter: PostCommentFindManyInput): Promise<PostCommentWire[]> {
    const matchingPostComments$ = this.client.send(
      SVC_POST_COMMENT_INTERNAL_EVENT_FIND_MANY,
      filter
    );
    return await lastValueFrom(matchingPostComments$);
  }
  async createOne(input: PostCommentCreateOneInput): Promise<PostCommentWire> {
    const newPostComment = this.client.send(
      SVC_POST_COMMENT_INTERNAL_EVENT_CREATE_ONE,
      input
    );
    return await lastValueFrom(newPostComment);
  }

  async _onCreated(input: PostCommentWasCreatedInternalMessage): Promise<void> {
    await this.client.send(INTERNAL_MESSAGE_SVC_COMMENT_WAS_CREATED, input);
  }

  async updateOne(
    filter: PostCommentFindOneInput,
    input: PostCommentUpdateOneInput
  ): Promise<PostCommentMutationResponse> {
    const postCommentChangesSaved = this.client.send(
      SVC_POST_COMMENT_INTERNAL_EVENT_UPDATE_ONE,
      {filter, input}
    );
    return await lastValueFrom(postCommentChangesSaved);
  }

  async deleteOne(
    filter: PostCommentFindOneInput
  ): Promise<PostCommentMutationResponse> {
    const matchingPostComment$ = this.client.send(
      SVC_POST_COMMENT_INTERNAL_EVENT_DELETE_ONE,
      filter
    );
    return await lastValueFrom(matchingPostComment$);
  }
}
