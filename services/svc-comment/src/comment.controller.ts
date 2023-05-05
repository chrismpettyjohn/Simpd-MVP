import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {CommentRepository} from './comment.repository';
import {commentEntityToCommentWire} from './comment.wire';
import {
  CommentFindOneInput,
  CommentWire,
  SVC_COMMENT_INTERNAL_EVENT_FIND_ONE_BY_ID,
} from '@simpd/lib-client';

@Controller()
export class CommentController {
  constructor(private readonly commentRepo: CommentRepository) {}

  @MessagePattern(SVC_COMMENT_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async commentFindOneByID(data: CommentFindOneInput): Promise<CommentWire> {
    const matchingRole = await this.commentRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return commentEntityToCommentWire(matchingRole);
  }
}
