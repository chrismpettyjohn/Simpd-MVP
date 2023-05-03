import {Repository} from 'typeorm';
import {CommentEntity} from './comment.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class CommentRepository extends BaseRepository<CommentEntity> {
  constructor(
    @InjectRepository(CommentEntity) userRepo: Repository<CommentEntity>
  ) {
    super(userRepo);
  }
}
