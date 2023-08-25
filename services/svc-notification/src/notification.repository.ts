import {Repository} from 'typeorm';
import {NotificationEntity} from './notification.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class NotificationRepository extends BaseRepository<NotificationEntity> {
  constructor(
    @InjectRepository(NotificationEntity)
    userRepo: Repository<NotificationEntity>
  ) {
    super(userRepo);
  }
}
