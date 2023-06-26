import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';
import {ProfileSubscriptionGroupMembershipMembershipEntity} from './profile-subscription-group-membership.entity';

@Injectable()
export class ProfileSubscriptionGroupMembershipRepository extends BaseRepository<ProfileSubscriptionGroupMembershipMembershipEntity> {
  constructor(
    @InjectRepository(ProfileSubscriptionGroupMembershipMembershipEntity)
    profileSubscriptionGroupMembershipRepo: Repository<ProfileSubscriptionGroupMembershipMembershipEntity>
  ) {
    super(profileSubscriptionGroupMembershipRepo);
  }
}
