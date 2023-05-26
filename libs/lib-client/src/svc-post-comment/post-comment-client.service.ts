import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  PostCommentCreateOneInput,
  PostCommentFindManyInput,
  PostCommentFindOneInput,
  PostCommentMutationResponse,
  PostCommentUpdateOneInput,
  PostCommentWire,
} from './post-comment-client.types';
import {
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
