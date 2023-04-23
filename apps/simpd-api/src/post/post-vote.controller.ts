import {PostVoteWire} from '@simpd/types';
import {PostService} from './post.service';
import {PostVoteDTO} from './post-vote.dto';
import {PostVotePipe} from './post-vote.pipe';
import {GenericPostPipe} from './generic-post.pipe';
import {PostEntity} from '../database/post/post.entity';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {postVoteWire} from '../database/post/post-vote.wire';
import {SessionEntity} from '../database/session/session.entity';
import {PostVoteEntity} from '../database/post/post-vote.entity';
import {Body, Controller, Delete, Param, Post} from '@nestjs/common';
import {PostVoteRepository} from '../database/post/post-vote.repository';

@Controller('posts/:postID/votes')
@HasSession()
export class PostVoteController {
  constructor(
    private readonly postService: PostService,
    private readonly postVoteRepo: PostVoteRepository
  ) {}

  @Post()
  async createOrUpdatePostChoiceReaction(
    @Param('postID', GenericPostPipe) post: PostEntity,
    @GetSession() session: SessionEntity,
    @Body() postVoteDTO: PostVoteDTO
  ): Promise<PostVoteWire> {
    await this.postService.userCanAccessPost(post, session.userID);
    await this.postService.postCanHaveVotes(post);
    await this.postService.createOrUpdatePostVoteForPostAndUser(
      post,
      session.userID,
      postVoteDTO.postChoiceID
    );
    const postChoiceReaction = await this.postVoteRepo.findOneOrFail({
      postID: post.id!,
      userID: session.userID,
      postChoiceID: postVoteDTO.postChoiceID,
    });
    return postVoteWire(postChoiceReaction);
  }

  @Delete(':voteID')
  async deletePollPostByID(
    @GetSession() session: SessionEntity,
    @Param('voteID', PostVotePipe)
    postChoiceReaction: PostVoteEntity
  ): Promise<void> {
    this.postService.userOwnsPostReaction(postChoiceReaction, session.userID);
    await this.postVoteRepo.delete({id: postChoiceReaction.id!});
  }
}
