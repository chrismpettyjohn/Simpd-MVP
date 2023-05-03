import { Module } from '@nestjs/common';
import { AWSEntity } from './aws.entity';
import { AWSResolver } from './aws.resolver';
import { AWSController } from './aws.controller';
import { AWSRepository } from './aws.repository';
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
      entities: [AWSEntity],
      synchronize: true,
    }),
  ],
  providers: [AWSRepository, AWSResolver],
  controllers: [AWSController],
})
export class AWSModule { }
