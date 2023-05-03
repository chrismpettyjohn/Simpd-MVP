import { Module } from '@nestjs/common';
import { ReportEntity } from './report.entity';
import { ReportResolver } from './report.resolver';
import { ReportController } from './report.controller';
import { ReportRepository } from './report.repository';
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
      entities: [ReportEntity],
      synchronize: true,
    }),
  ],
  providers: [ReportRepository, ReportResolver],
  controllers: [ReportController],
})
export class ReportModule { }
