import {Module} from '@nestjs/common';
import {MediaEntity} from './media.entity';
import {MediaService} from './media.service';
import {MediaResolver} from './media.resolver';
import {MediaRepository} from './media.repository';
import {ProfileClientModule} from '@simpd/lib-client';
import {MulterModule} from '@nestjs/platform-express';
import {MediaAwsS3MulterService} from './media-multer.service';
import {MediaExternalController} from './media.external.controller';
import {MediaInternalController} from './media.internal.controller';
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
      entities: [MediaEntity],
      synchronize: true,
    }),
    MulterModule.registerAsync({
      imports: [],
      useClass: MediaAwsS3MulterService,
    }),
  ],
  providers: [MediaRepository, MediaResolver, MediaService],
  controllers: [MediaInternalController, MediaExternalController],
})
export class MediaModule {}
