import {ErrorCode} from '@simpd/types';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';
import {PostVoteEntity} from '../database/post/post-vote.entity';
import {PostVoteRepository} from '../database/post/post-vote.repository';

@Injectable()
export class PostVotePipe implements PipeTransform {
  constructor(private readonly postChoiceReactionRepo: PostVoteRepository) {}

  async transform(postID: number): Promise<PostVoteEntity> {
    const postChoiceReaction = await this.postChoiceReactionRepo.findOne({
      id: postID,
    });

    if (!postChoiceReaction) {
      throw new NotFoundException(ErrorCode.PostChoiceReactionDoesNotExist);
    }

    return postChoiceReaction;
  }
}
