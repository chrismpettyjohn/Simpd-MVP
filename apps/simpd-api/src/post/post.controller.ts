import {PostWire} from '@simpd/types';
import {PostService} from './post.service';
import {AWSS3Service} from '../aws/aws-s3.service';
import {GenericPostPipe} from './generic-post.pipe';
import {postWire} from '../database/post/post.wire';
import {PostEntity} from '../database/post/post.entity';
import {GetSession} from '../session/get-session.decorator';
import {HasSession} from '../session/has-session.decorator';
import {Controller, Get, Delete, Param} from '@nestjs/common';
import {PostRepository} from '../database/post/post.repository';
import {SessionEntity} from '../database/session/session.entity';

@Controller('posts/:postID')
@HasSession()
export class PostController {
  constructor(
    private readonly awsS3Service: AWSS3Service,
    private readonly postService: PostService,
    private readonly postRepo: PostRepository
  ) {}

  @Get()
  async getPostByID(
    @Param('postID', GenericPostPipe) post: PostEntity,
    @GetSession() session: SessionEntity
  ): Promise<PostWire> {
    this.postService.userCanAccessPost(post, session.userID);
    const fileURLs = await Promise.all(
      post.media!.map(_ => this.awsS3Service.getObjectURL(_.media!.s3Key))
    );
    return postWire(post, fileURLs);
  }

  @Delete()
  async deletePostByID(
    @Param('postID', GenericPostPipe) post: PostEntity,
    @GetSession() session: SessionEntity
  ) {
    this.postService.userCanAccessPost(post, session.userID);
    await this.postRepo.delete({id: post.id!});
  }
}
