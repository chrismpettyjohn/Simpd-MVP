import {Module} from '@nestjs/common';
import {CommentEntity} from './comment.entity';
import {CommentResolver} from './comment.resolver';
import {ProfileClientModule} from '@simpd/lib-client';
import {CommentController} from './comment.controller';
import {CommentRepository} from './comment.repository';
import {
  GraphQLModule,
  DatabaseModule,
  CommonModule,
  SessionModule,
} from '@simpd/lib-api';

@Module({
  imports: [
    CommonModule,
    SessionModule,
    ProfileClientModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [CommentEntity],
      synchronize: true,
    }),
  ],
  providers: [CommentRepository, CommentResolver],
  controllers: [CommentController],
})
export class CommentModule {}
