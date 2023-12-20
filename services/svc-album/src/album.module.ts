import {Module} from '@nestjs/common';
import {AlbumEntity} from './album.entity';
import {AlbumResolver} from './album.resolver';
import {AlbumController} from './album.controller';
import {AlbumRepository} from './album.repository';
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
    GraphQLModule.forRoot(),
    DatabaseModule.forRoot({
      entities: [AlbumEntity],
      synchronize: true,
    }),
  ],
  providers: [AlbumRepository, AlbumResolver],
  controllers: [AlbumController],
})
export class AlbumModule {}
