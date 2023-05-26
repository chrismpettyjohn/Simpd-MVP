import {Injectable} from '@nestjs/common';
import {
  BaseCommentClientService,
  CommentClientService,
  SVC_POST_COMMENT_NAME,
} from '@simpd/lib-client';

@Injectable()
export class PostCommentService extends BaseCommentClientService {
  constructor(commentClientService: CommentClientService) {
    super(SVC_POST_COMMENT_NAME, commentClientService);
  }
}
