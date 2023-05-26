import {In} from 'typeorm';
import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {CommentRepository} from './comment.repository';
import {commentEntityToCommentWire} from './comment.wire';
import {
  CommentCreateOneInput,
  CommentFindManyInput,
  CommentFindOneInput,
  CommentMutationResponse,
  CommentUpdateInputInput,
  CommentWire,
  SVC_COMMENT_INTERNAL_EVENT_CREATE_ONE,
  SVC_COMMENT_INTERNAL_EVENT_DELETE_ONE,
  SVC_COMMENT_INTERNAL_EVENT_FIND_MANY,
  SVC_COMMENT_INTERNAL_EVENT_FIND_ONE,
  SVC_COMMENT_INTERNAL_EVENT_UPDATE_ONE,
} from '@simpd/lib-client';

@Controller()
export class CommentController {
  constructor(private readonly commentRepo: CommentRepository) {}

  @MessagePattern(SVC_COMMENT_INTERNAL_EVENT_FIND_ONE)
  async commentFindOne(filter: CommentFindOneInput): Promise<CommentWire> {
    const matchingRole = await this.commentRepo.findOneOrFail({
      where: {
        serviceKey: filter.serviceKey,
        id: filter.id,
        resourceID: filter.resourceID,
        profileID: filter.profileID,
      },
    });
    return commentEntityToCommentWire(matchingRole);
  }

  @MessagePattern(SVC_COMMENT_INTERNAL_EVENT_FIND_MANY)
  async commentFindMany(filter: CommentFindManyInput): Promise<CommentWire[]> {
    const matchingComments = await this.commentRepo.find({
      where: {
        serviceKey: filter.serviceKey,
        id: filter.ids && In(filter.ids),
        resourceID: filter.resourceIDs && In(filter.resourceIDs),
        profileID: filter.profileIDs && In(filter.profileIDs),
      },
    });
    return matchingComments.map(commentEntityToCommentWire);
  }

  @MessagePattern(SVC_COMMENT_INTERNAL_EVENT_CREATE_ONE)
  async commentCreateOne(input: CommentCreateOneInput): Promise<CommentWire> {
    const newComment = await this.commentRepo.create(input);
    return commentEntityToCommentWire(newComment);
  }

  @MessagePattern(SVC_COMMENT_INTERNAL_EVENT_UPDATE_ONE)
  async commentUpdateOne(
    filter: CommentFindOneInput,
    input: CommentUpdateInputInput
  ): Promise<CommentMutationResponse> {
    await this.commentRepo.update(
      {
        serviceKey: filter.serviceKey,
        id: filter.id,
        resourceID: filter.resourceID,
        profileID: filter.profileID,
      },
      input
    );
    return {success: true};
  }

  @MessagePattern(SVC_COMMENT_INTERNAL_EVENT_DELETE_ONE)
  async commentDeleteOne(
    filter: CommentFindOneInput
  ): Promise<CommentMutationResponse> {
    await this.commentRepo.delete({
      serviceKey: filter.serviceKey,
      id: filter.id,
      resourceID: filter.resourceID,
      profileID: filter.profileID,
    });
    return {success: true};
  }
}
