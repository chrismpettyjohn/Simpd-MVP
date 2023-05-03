import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {MediaEntity} from './media.entity';
import {MediaType} from '@simpd/lib-client';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';
import {registerEnumType} from '@nestjs/graphql';

@Injectable()
export class MediaRepository extends BaseRepository<MediaEntity> {
  constructor(
    @InjectRepository(MediaEntity) mediaRepo: Repository<MediaEntity>
  ) {
    super(mediaRepo);
  }
}

registerEnumType(MediaType, {
  name: 'MediaType',
});
