import {Repository} from 'typeorm';
import {MessageEntity} from './message.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class MessageRepository extends BaseRepository<MessageEntity> {
  constructor(
    @InjectRepository(MessageEntity) userRepo: Repository<MessageEntity>
  ) {
    super(userRepo);
  }
}
