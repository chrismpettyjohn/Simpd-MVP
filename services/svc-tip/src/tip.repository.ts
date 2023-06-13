import {Repository} from 'typeorm';
import {TipEntity} from './tip.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class TipRepository extends BaseRepository<TipEntity> {
  constructor(@InjectRepository(TipEntity) tipRepo: Repository<TipEntity>) {
    super(tipRepo);
  }
}
