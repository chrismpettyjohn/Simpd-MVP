import {Repository} from 'typeorm';
import {ProfileSubscriptionGroupEntity} from './profile-subscription-group.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class ProfileSubscriptionGroupRepository extends BaseRepository<ProfileSubscriptionGroupEntity> {
  constructor(
    @InjectRepository(ProfileSubscriptionGroupEntity)
    userRepo: Repository<ProfileSubscriptionGroupEntity>
  ) {
    super(userRepo);
  }
}
