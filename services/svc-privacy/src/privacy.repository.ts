import {Repository} from 'typeorm';
import {PrivacyEntity} from './privacy.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class PrivacyRepository extends BaseRepository<PrivacyEntity> {
  constructor(
    @InjectRepository(PrivacyEntity) userRepo: Repository<PrivacyEntity>
  ) {
    super(userRepo);
  }
}
