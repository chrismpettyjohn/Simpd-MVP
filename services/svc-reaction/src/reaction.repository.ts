import {Repository} from 'typeorm';
import {ReactionEntity} from './reaction.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class ReactionRepository extends BaseRepository<ReactionEntity> {
  constructor(
    @InjectRepository(ReactionEntity) userRepo: Repository<ReactionEntity>
  ) {
    super(userRepo);
  }
}
