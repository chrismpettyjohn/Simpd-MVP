import {Module} from '@nestjs/common';
import {PostPrivacyService} from './post-privacy.service';
import {PostPrivacyResolver} from './post-privacy.resolver';
import {GraphQLModule, CommonModule, SessionModule} from '@simpd/lib-api';
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
  providers: [PostPrivacyResolver, PostPrivacyService],
})
export class PostPrivacyModule {}
