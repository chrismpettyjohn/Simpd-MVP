import {PostService} from './post.service';
import {GenericPostPipe} from './generic-post.pipe';
import {PostReactionDTO} from './post-reaction.dto';
import {getTimestamp} from '../common/get-timestamp';
import {PostEntity} from '../database/post/post.entity';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {SessionEntity} from '../database/session/session.entity';
import {Body, Controller, Delete, Param, Post} from '@nestjs/common';
import {PostReactionRepository} from '../database/post/post-reaction.repository';

@Controller('posts/:postID/reactions')
@HasSession()
export class PostReactionController {
  constructor(
    private readonly postService: PostService,
    private readonly postReactionRepo: PostReactionRepository
  ) {}

  @Post()
  async createOrUpdatePostReaction(
    @Param('postID', GenericPostPipe) post: PostEntity,
    @GetSession() session: SessionEntity,
    @Body() postReactionDTO: PostReactionDTO
  ) {
    this.postService.userCanAccessPost(post, session.userID);
    const existingReaction = await this.postReactionRepo.findOneOrFail({
      postID: post.id!,
      userID: session.userID,
    });

    if (existingReaction) {
      await this.postReactionRepo.update(
        {id: existingReaction.id!},
        {reaction: postReactionDTO.reaction, updatedAt: getTimestamp()}
      );
      return;
    }

    await this.postReactionRepo.create({
      postID: post.id!,
      userID: session.userID,
      reaction: postReactionDTO.reaction,
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
    });
  }

  @Delete()
  async deletePostReaction(
    @Param('postID', GenericPostPipe) post: PostEntity,
    @GetSession() session: SessionEntity
  ) {
    this.postService.userCanAccessPost(post, session.userID);
    await this.postReactionRepo.delete({
      postID: post.id!,
      userID: session.userID,
    });
  }
}
