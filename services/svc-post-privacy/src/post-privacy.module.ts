import { Module } from '@nestjs/common';
import { PostPrivacyService } from './post-privacy.service';
import { PostPrivacyResolver } from './post-privacy.resolver';
import { PostPrivacyController } from './post-privacy.controller';
import { GraphQLModule, CommonModule, SessionModule } from '@simpd/lib-api';
import {
  BookmarkClientModule,
  MediaClientModule,
  PrivacyClientModule,
  ProfileClientModule,
} from '@simpd/lib-client';

@Module({
  imports: [
    CommonModule,
    SessionModule,
    ProfileClientModule,
    PrivacyClientModule,
    MediaClientModule,
    BookmarkClientModule,
    GraphQLModule.forRoot(),
  ],
  providers: [PostPrivacyService, PostPrivacyResolver],
  controllers: [PostPrivacyController],
})
export class PostPrivacyModule { }
