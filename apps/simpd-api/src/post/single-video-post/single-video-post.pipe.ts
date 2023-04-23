import {PostType} from '@simpd/types';
import {Injectable} from '@nestjs/common';
import {BasePostPipe} from '../post.pipe.base';
import {PostRepository} from '../../database/post/post.repository';

@Injectable()
export class SingleVideoPostPipe extends BasePostPipe {
  constructor(postRepo: PostRepository) {
    super(PostType.SingleVideo, postRepo);
  }
}
