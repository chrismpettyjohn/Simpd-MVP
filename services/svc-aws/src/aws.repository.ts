import { Repository } from 'typeorm';
import { AWSEntity } from './aws.entity';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from '@simpd/lib-api';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AWSRepository extends BaseRepository<AWSEntity> {
  constructor(
    @InjectRepository(AWSEntity) userRepo: Repository<AWSEntity>
  ) {
    super(userRepo);
  }
}
