import {ErrorCode, PostType} from '@simpd/types';
import {PostEntity} from '../database/post/post.entity';
import {PostRepository} from '../database/post/post.repository';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class BasePostPipe implements PipeTransform {
  constructor(
    private readonly postType: PostType,
    private readonly postRepo: PostRepository
  ) {}

  async transform(postID: number): Promise<PostEntity> {
    const post = await this.postRepo.findOne({id: postID});

    if (!post) {
      throw new NotFoundException(ErrorCode.PostDoesNotExist);
    }

    if (post.type === this.postType) {
      throw new NotFoundException(ErrorCode.PostWrongType);
    }

    return post;
  }
}
