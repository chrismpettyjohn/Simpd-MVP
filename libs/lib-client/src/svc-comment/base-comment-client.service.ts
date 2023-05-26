import {CommentClientService} from './comment-client.service';
import {
  CommentCreateOneInput,
  CommentFindManyInput,
  CommentFindOneInput,
  CommentMutationResponse,
  CommentWire,
} from './comment-client.types';

export class BaseCommentClientService {
  constructor(
    private readonly serviceKey: string,
    private readonly commentClientService: CommentClientService
  ) {}

  async createOne(
    input: Omit<CommentCreateOneInput, 'serviceKey'>
  ): Promise<CommentWire> {
    return await this.commentClientService.createOne({
      ...input,
      serviceKey: this.serviceKey,
    });
  }

  async findOne(
    filter: Omit<CommentFindOneInput, 'serviceKey'>
  ): Promise<CommentWire> {
    return await this.commentClientService.findOne({
      ...filter,
      serviceKey: this.serviceKey,
    });
  }

  async findMany(
    filter: Omit<CommentFindManyInput, 'serviceKey'>
  ): Promise<CommentWire[]> {
    return await this.commentClientService.findMany({
      ...filter,
      serviceKey: this.serviceKey,
    });
  }

  async deleteOne(
    filter: Omit<CommentFindOneInput, 'serviceKey'>
  ): Promise<CommentMutationResponse> {
    return await this.commentClientService.deleteOne({
      ...filter,
      serviceKey: this.serviceKey,
    });
  }
}
