import {Module} from '@nestjs/common';
import {CommentClientModule} from '@simpd/lib-client';
import {PostCommentService} from './post-comment.service';
import {PostCommentResolver} from './post-comment.resolver';
import {GraphQLModule, CommonModule, SessionModule} from '@simpd/lib-api';

@Module({
  imports: [
    CommonModule,
    SessionModule,
    CommentClientModule,
    GraphQLModule.forRoot(),
  ],
  providers: [PostCommentService, PostCommentResolver],
  controllers: [],
})
export class PostCommentModule {}
