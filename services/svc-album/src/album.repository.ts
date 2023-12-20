import {Repository} from 'typeorm';
import {AlbumEntity} from './album.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class AlbumRepository extends BaseRepository<AlbumEntity> {
  constructor(
    @InjectRepository(AlbumEntity) userRepo: Repository<AlbumEntity>
  ) {
    super(userRepo);
  }
}
