import {Repository} from 'typeorm';
import {MediaWire} from '@simpd/lib-client';
import {MediaEntity} from './media.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class MediaRepository<
  MediaData extends MediaWire
> extends BaseRepository<MediaEntity<MediaData>> {
  constructor(
    @InjectRepository(MediaEntity) mediaRepo: Repository<MediaEntity<MediaData>>
  ) {
    super(mediaRepo);
  }
}
