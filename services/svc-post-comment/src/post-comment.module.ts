import {Module} from '@nestjs/common';
import {PostCommentService} from './post-comment.service';
import {PostCommentResolver} from './post-comment.resolver';
import {GraphQLModule, CommonModule, SessionModule} from '@simpd/lib-api';
import {CommentClientModule, PostCommentClientModule} from '@simpd/lib-client';

@Module({
  imports: [
    CommonModule,
    SessionModule,
    CommentClientModule,
    GraphQLModule.forRoot(),
    PostCommentClientModule,
  ],
  providers: [PostCommentService, PostCommentResolver],
  controllers: [],
})
export class PostCommentModule {}
