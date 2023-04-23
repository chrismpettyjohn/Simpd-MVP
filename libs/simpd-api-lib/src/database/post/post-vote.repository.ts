import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {PostVoteEntity} from './post-vote.entity';

@Injectable()
export class PostVoteRepository extends BaseRepository<PostVoteEntity> {
  constructor(
    @InjectRepository(PostVoteEntity)
    postVoteRepo: Repository<PostVoteEntity>
  ) {
    super(postVoteRepo, []);
  }
}
