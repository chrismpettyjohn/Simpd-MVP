import {PostService} from '../post.service';
import {PollPostPipe} from './poll-post.pipe';
import {PostType, PollPostWire} from '@simpd/types';
import {getTimestamp} from '../../common/get-timestamp';
import {PostEntity} from '../../database/post/post.entity';
import {pollPostWire} from '../../database/post/post.wire';
import {HasSession} from '../../session/has-session.decorator';
import {GetSession} from '../../session/get-session.decorator';
import {PostRepository} from '../../database/post/post.repository';
import {SessionEntity} from '../../database/session/session.entity';
import {CreatePollPostDTO, UpdatePollPostDTO} from './poll-post.dto';
import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('posts/poll')
@HasSession()
export class PollPostController {
  constructor(
    private readonly postService: PostService,
    private readonly postRepo: PostRepository
  ) {}

  @Post()
  async createPollPost(
    @Body() createPollPostDTO: CreatePollPostDTO,
    @GetSession() session: SessionEntity
  ): Promise<PollPostWire> {
    const newPollPost = await this.postRepo.create({
      userID: session.userID,
      profileID: session.profileID,
      type: PostType.Poll,
      content: createPollPostDTO.content,
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
    });
    await this.postService.updateChoicesForPost(
      newPollPost,
      createPollPostDTO.choices
    );

    const pollPostWithChoices = await this.postRepo.findOneOrFail({
      id: newPollPost.id!,
    });

    return pollPostWire(pollPostWithChoices);
  }

  @Patch(':postID')
  async updatePollPostByID(
    @Param('postID', PollPostPipe) post: PostEntity,
    @GetSession() session: SessionEntity,
    @Body() updatePollPostDTO: UpdatePollPostDTO
  ): Promise<void> {
    this.postService.userOwnsPost(post, session.userID);
    await this.postRepo.update(
      {id: post.id!},
      {content: updatePollPostDTO.content}
    );

    if (updatePollPostDTO.choices) {
      await this.postService.updateChoicesForPost(
        post,
        updatePollPostDTO.choices
      );
    }
  }
}
