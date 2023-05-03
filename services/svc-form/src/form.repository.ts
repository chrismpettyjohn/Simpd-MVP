import {Repository} from 'typeorm';
import {FormEntity} from './form.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '@simpd/lib-api';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class FormRepository extends BaseRepository<FormEntity> {
  constructor(@InjectRepository(FormEntity) userRepo: Repository<FormEntity>) {
    super(userRepo);
  }
}
