import {Repository} from 'typeorm';
import {PostEntity} from './post.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class PostRepository extends BaseRepository<PostEntity> {
  constructor(@InjectRepository(PostEntity) userRepo: Repository<PostEntity>) {
    super(userRepo);
  }
}
