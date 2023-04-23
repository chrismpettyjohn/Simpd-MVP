import {Module} from '@nestjs/common';
import {AWSModule} from '../aws/aws.module';
import {ProfileService} from './profile.service';
import {MediaModule} from '../media/media.module';
import {ProfileController} from './profile.controller';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {ProfileByUsernamePipe} from './profile-by-username.pipe';

@Module({
  imports: [DatabaseModule, SessionModule, MediaModule, AWSModule],
  controllers: [ProfileController],
  providers: [ProfileByUsernamePipe, ProfileService],
  exports: [ProfileByUsernamePipe, ProfileService],
})
export class ProfileModule {}
