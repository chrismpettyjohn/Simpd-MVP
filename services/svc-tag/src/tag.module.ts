import {Module} from '@nestjs/common';
import {TagEntity} from './tag.entity';
import {TagResolver} from './tag.resolver';
import {TagController} from './tag.controller';
import {TagRepository} from './tag.repository';
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
      entities: [TagEntity],
      synchronize: true,
    }),
  ],
  providers: [TagRepository, TagResolver],
  controllers: [TagController],
})
export class TagModule {}
