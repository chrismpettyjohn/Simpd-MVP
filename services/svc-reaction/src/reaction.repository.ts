import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {ReactionType} from '@simpd/lib-client';
import {registerEnumType} from '@nestjs/graphql';
import {InjectRepository} from '@nestjs/typeorm';
import {ReactionEntity} from './reaction.entity';

@Injectable()
export class ReactionRepository extends BaseRepository<ReactionEntity> {
  constructor(
    @InjectRepository(ReactionEntity) userRepo: Repository<ReactionEntity>
  ) {
    super(userRepo);
  }
}

registerEnumType(ReactionType, {
  name: 'ReactionType',
});
