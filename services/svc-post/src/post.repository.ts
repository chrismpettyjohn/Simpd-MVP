import {Repository} from 'typeorm';
import {PostWire} from '@simpd/lib-client';
import {PostEntity} from './post.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class PostRepository<PostData extends PostWire> extends BaseRepository<
  PostEntity<PostData>
> {
  constructor(
    @InjectRepository(PostEntity) postRepo: Repository<PostEntity<PostData>>
  ) {
    super(postRepo);
  }
}
