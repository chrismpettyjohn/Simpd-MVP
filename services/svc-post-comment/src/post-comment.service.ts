import {Injectable} from '@nestjs/common';
import {
  BaseCommentClientService,
  CommentClientService,
  CommentCreateOneInput,
  CommentWire,
  PostCommentClientService,
  SVC_POST_COMMENT_NAME,
} from '@simpd/lib-client';

@Injectable()
export class PostCommentService extends BaseCommentClientService {
  constructor(
    commentClientService: CommentClientService,
    private readonly postCommentClientService: PostCommentClientService
  ) {
    super(SVC_POST_COMMENT_NAME, commentClientService);
  }

  async createOne(
    input: Omit<CommentCreateOneInput, 'serviceKey'>
  ): Promise<CommentWire> {
    const newComment = await super.createOne(input);
    await this.postCommentClientService._onCreated({
      postCommentID: newComment.id!,
    });
    return newComment;
  }
}
