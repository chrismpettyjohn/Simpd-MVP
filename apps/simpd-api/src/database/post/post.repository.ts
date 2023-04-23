import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {PostEntity} from './post.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';

@Injectable()
export class PostRepository extends BaseRepository<PostEntity> {
  constructor(@InjectRepository(PostEntity) postRepo: Repository<PostEntity>) {
    super(postRepo, ['choices', 'votes', 'media', 'media.media', 'reactions']);
  }
}
