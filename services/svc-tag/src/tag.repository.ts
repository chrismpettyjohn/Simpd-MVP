import {Repository} from 'typeorm';
import {TagEntity} from './tag.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class TagRepository extends BaseRepository<TagEntity> {
  constructor(@InjectRepository(TagEntity) userRepo: Repository<TagEntity>) {
    super(userRepo);
  }
}
