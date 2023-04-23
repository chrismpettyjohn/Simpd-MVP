import {Module} from '@nestjs/common';
import {PostService} from './post.service';
import {AWSModule} from '../aws/aws.module';
import {PostVotePipe} from './post-vote.pipe';
import {PostController} from './post.controller';
import {MediaModule} from '../media/media.module';
import {GenericPostPipe} from './generic-post.pipe';
import {SessionModule} from '../session/session.module';
import {PollPostPipe} from './poll-post/poll-post.pipe';
import {QuizPostPipe} from './quiz-post/quiz-post.pipe';
import {TextPostPipe} from './text-post/text-post.pipe';
import {PostVoteController} from './post-vote.controller';
import {DatabaseModule} from '../database/database.module';
import {PostReactionController} from './post-reaction.controller';
import {TextPostController} from './text-post/text-post.controller';
import {PollPostController} from './poll-post/poll-post.controller';
import {QuizPostController} from './quiz-post/quiz-post.controller';
import {MediaAlbumPostPipe} from './media-album-post/media-album-post.pipe';
import {SinglePhotoPostPipe} from './single-photo-post/single-photo-post.pipe';
import {SingleVideoPostPipe} from './single-video-post/single-video-post.pipe';
import {MediaAlbumPostService} from './media-album-post/media-album-post.service';
import {SinglePhotoPostService} from './single-photo-post/single-photo-post.service';
import {SingleVideoPostService} from './single-video-post/single-video-post.service';
import {MediaAlbumPostController} from './media-album-post/media-album-post.controller';
import {SinglePhotoPostController} from './single-photo-post/single-photo-post.controller';
import {SingleVideoPostController} from './single-video-post/single-video-post.controller';

@Module({
  imports: [AWSModule, DatabaseModule, SessionModule, MediaModule],
  controllers: [
    MediaAlbumPostController,
    PollPostController,
    QuizPostController,
    SinglePhotoPostController,
    SingleVideoPostController,
    TextPostController,
    PostVoteController,
    PostController,
    PostReactionController,
  ],
  providers: [
    PostService,
    MediaAlbumPostPipe,
    PollPostPipe,
    QuizPostPipe,
    SinglePhotoPostPipe,
    SingleVideoPostPipe,
    TextPostPipe,
    MediaAlbumPostService,
    SingleVideoPostService,
    SinglePhotoPostService,
    PostVotePipe,
    GenericPostPipe,
  ],
  exports: [
    PostService,
    MediaAlbumPostPipe,
    PollPostPipe,
    QuizPostPipe,
    SinglePhotoPostPipe,
    SingleVideoPostPipe,
    TextPostPipe,
    MediaAlbumPostService,
    SingleVideoPostService,
    SinglePhotoPostService,
    PostVotePipe,
    GenericPostPipe,
  ],
})
export class PostModule {}
