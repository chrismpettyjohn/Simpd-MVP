import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {PostChoiceEntity} from './post-choice.entity';

@Injectable()
export class PostChoiceRepository extends BaseRepository<PostChoiceEntity> {
  constructor(
    @InjectRepository(PostChoiceEntity)
    postQuizChoiceRepo: Repository<PostChoiceEntity>
  ) {
    super(postQuizChoiceRepo, []);
  }
}
