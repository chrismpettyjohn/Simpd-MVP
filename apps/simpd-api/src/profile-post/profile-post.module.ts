import {Module} from '@nestjs/common';
import {PostModule} from '../post/post.module';
import {SessionModule} from '../session/session.module';
import {ProfileModule} from '../profile/profile.module';
import {DatabaseModule} from '../database/database.module';
import {ProfilePostController} from './profile-post.controller';
import {ProfileByUsernamePipe} from '../profile/profile-by-username.pipe';

@Module({
  imports: [DatabaseModule, SessionModule, ProfileModule, PostModule],
  controllers: [ProfilePostController],
  providers: [ProfileByUsernamePipe],
})
export class ProfilePostModule {}
