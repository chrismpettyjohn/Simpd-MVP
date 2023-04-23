import { Module } from '@nestjs/common';
import { AWSModule } from './aws/aws.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { MediaModule } from './media/media.module';
import { CommonModule } from './common/common.module';
import { ProfileModule } from './profile/profile.module';
import { SessionModule } from './session/session.module';
import { DatabaseModule } from './database/database.module';
import { ActivityModule } from './activity/activity.module';
import { ProfilePostModule } from './profile-post/profile-post.module';
import { InternationalizationModule } from './internationalization/internationalization.module';

@Module({
  imports: [
    ActivityModule,
    AWSModule,
    CommonModule,
    DatabaseModule,
    InternationalizationModule,
    MediaModule,
    PostModule,
    ProfileModule,
    ProfilePostModule,
    SessionModule,
    UserModule
  ],
})
export class SimpdModule { }
