import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';
import {SubscriptionGroupEntity} from './subscription-group.entity';

@Injectable()
export class SubscriptionGroupRepository extends BaseRepository<SubscriptionGroupEntity> {
  constructor(
    @InjectRepository(SubscriptionGroupEntity)
    userRepo: Repository<SubscriptionGroupEntity>
  ) {
    super(userRepo);
  }
}
