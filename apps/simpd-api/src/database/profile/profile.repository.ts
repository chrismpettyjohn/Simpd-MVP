import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {ProfileEntity} from './profile.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';

@Injectable()
export class ProfileRepository extends BaseRepository<ProfileEntity> {
  constructor(
    @InjectRepository(ProfileEntity) profileRepo: Repository<ProfileEntity>
  ) {
    super(profileRepo, ['profilePicture', 'coverPicture']);
  }
}
