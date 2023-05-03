import { Repository } from 'typeorm';
import { ReportEntity } from './report.entity';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from '@simpd/lib-api';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReportRepository extends BaseRepository<ReportEntity> {
  constructor(@InjectRepository(ReportEntity) userRepo: Repository<ReportEntity>) {
    super(userRepo);
  }
}
