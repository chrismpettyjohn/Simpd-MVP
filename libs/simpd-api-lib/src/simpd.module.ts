import {Module} from '@nestjs/common';
import {AWSModule} from './aws/aws.module';
import {PostModule} from './post/post.module';
import {UserModule} from './user/user.module';
import {MediaModule} from './media/media.module';
import {CommonModule} from './common/common.module';
import {SessionModule} from './session/session.module';
import {ProfileModule} from './profile/profile.module';
import {ActivityModule} from './activity/activity.module';
import {DatabaseModule} from './database/database.module';
import {ProfilePostModule} from './profile-post/profile-post.module';

@Module({
  imports: [
    AWSModule,
    ActivityModule,
    CommonModule,
    DatabaseModule,
    SessionModule,
    UserModule,
    MediaModule,
    ProfileModule,
    PostModule,
    ProfilePostModule,
  ],
  exports: [
    ActivityModule,
    AWSModule,
    CommonModule,
    DatabaseModule,
    SessionModule,
    UserModule,
    MediaModule,
    ProfileModule,
    PostModule,
    ProfilePostModule,
  ],
})
export class SimpdModule {}
