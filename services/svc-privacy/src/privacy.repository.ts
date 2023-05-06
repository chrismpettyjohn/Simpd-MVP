import {Repository} from 'typeorm';
import {PrivacyPolicyEntity} from './privacy-policy.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class PrivacyRepository extends BaseRepository<PrivacyPolicyEntity> {
  constructor(
    @InjectRepository(PrivacyPolicyEntity)
    userRepo: Repository<PrivacyPolicyEntity>
  ) {
    super(userRepo);
  }
}
