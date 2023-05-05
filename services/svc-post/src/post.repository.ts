import {Repository} from 'typeorm';
import {PostType, PostWire} from '@simpd/lib-client';
import {PostEntity} from './post.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class PostRepository<
  Data extends PostWire,
  Type extends PostType
> extends BaseRepository<PostEntity<Data, Type>> {
  constructor(
    @InjectRepository(PostEntity) postRepo: Repository<PostEntity<Data, Type>>
  ) {
    super(postRepo);
  }
}
