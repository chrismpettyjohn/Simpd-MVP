import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {PostMediaEntity} from './post-media.entity';

@Injectable()
export class PostMediaRepository extends BaseRepository<PostMediaEntity> {
  constructor(
    @InjectRepository(PostMediaEntity)
    postMediaRepo: Repository<PostMediaEntity>
  ) {
    super(postMediaRepo, []);
  }
}
