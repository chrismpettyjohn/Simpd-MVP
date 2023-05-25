import {Repository} from 'typeorm';
import {PostEntity} from './post.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';
import {registerEnumType} from '@nestjs/graphql';
import {PostType, PostWire} from '@simpd/lib-client';

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

registerEnumType(PostType, {
  name: 'PostType',
});
