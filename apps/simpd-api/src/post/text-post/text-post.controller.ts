import {PostService} from '../post.service';
import {TextPostPipe} from './text-post.pipe';
import {PostType, TextPostWire} from '@simpd/types';
import {getTimestamp} from '../../common/get-timestamp';
import {PostEntity} from '../../database/post/post.entity';
import {textPostWire} from '../../database/post/post.wire';
import {HasSession} from '../../session/has-session.decorator';
import {GetSession} from '../../session/get-session.decorator';
import {PostRepository} from '../../database/post/post.repository';
import {SessionEntity} from '../../database/session/session.entity';
import {CreateTextPostDTO, UpdateTextPostDTO} from './text-post.dto';
import {Body, Controller, Param, Patch, Post} from '@nestjs/common';

@Controller('posts/text')
@HasSession()
export class TextPostController {
  constructor(
    private readonly postService: PostService,
    private readonly postRepo: PostRepository
  ) {}

  @Post()
  async createTextPost(
    @Body() createTextPostDTO: CreateTextPostDTO,
    @GetSession() session: SessionEntity
  ): Promise<TextPostWire> {
    const newTextPost = await this.postRepo.create({
      userID: session.userID,
      profileID: session.profileID,
      type: PostType.Text,
      content: createTextPostDTO.content,
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
    });
    return textPostWire(newTextPost);
  }

  @Patch(':postID')
  async updateTextPostByID(
    @Param('postID', TextPostPipe) post: PostEntity,
    @GetSession() session: SessionEntity,
    @Body() updateTextPostDTO: UpdateTextPostDTO
  ): Promise<void> {
    this.postService.userOwnsPost(post, session.userID);
    await this.postRepo.update(
      {id: post.id!},
      {content: updateTextPostDTO.content}
    );
  }
}
