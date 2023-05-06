import {Repository} from 'typeorm';
import {SubscriptionGroupEntity} from './subscription-group.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class SubscriptionGroupRepository extends BaseRepository<SubscriptionGroupEntity> {
  constructor(
    @InjectRepository(SubscriptionGroupEntity)
    userRepo: Repository<SubscriptionGroupEntity>
  ) {
    super(userRepo);
  }
}
