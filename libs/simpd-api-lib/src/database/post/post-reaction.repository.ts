import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {PostReactionEntity} from './post-reaction.entity';

@Injectable()
export class PostReactionRepository extends BaseRepository<PostReactionEntity> {
  constructor(
    @InjectRepository(PostReactionEntity)
    postReactionRepo: Repository<PostReactionEntity>
  ) {
    super(postReactionRepo, []);
  }
}
