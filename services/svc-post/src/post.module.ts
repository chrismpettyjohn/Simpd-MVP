import {Module} from '@nestjs/common';
import {PostEntity} from './post.entity';
import {PostResolver} from './post.resolver';
import {PostController} from './post.controller';
import {PostRepository} from './post.repository';
import {PostPrivacyService} from './post-privacy.service';
import {
  MediaClientModule,
  PrivacyClientModule,
  ProfileClientModule,
} from '@simpd/lib-client';
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
    PrivacyClientModule,
    MediaClientModule,
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [PostEntity],
      synchronize: true,
    }),
  ],
  providers: [PostRepository, PostResolver, PostPrivacyService],
  controllers: [PostController],
})
export class PostModule {}
