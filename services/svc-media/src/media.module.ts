import {Module} from '@nestjs/common';
import {MediaEntity} from './media.entity';
import {MediaResolver} from './media.resolver';
import {MediaController} from './media.controller';
import {MediaRepository} from './media.repository';
import {ProfileClientModule} from '@simpd/lib-client';
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
  ],
  providers: [MediaRepository, MediaResolver],
  controllers: [MediaController],
})
export class MediaModule {}
