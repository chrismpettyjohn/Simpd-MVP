import { Injectable } from '@nestjs/common';
import { SVC_POST_NAME } from 'libs/lib-client/src/svc-post/post.const';
import {
  BaseCommentClientService,
  CommentClientService,
} from '@simpd/lib-client';

@Injectable()
export class PostCommentService extends BaseCommentClientService {
  constructor(commentClientService: CommentClientService) {
    super(SVC_POST_NAME, commentClientService);
  }
}
