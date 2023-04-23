import {PostService} from '../post.service';
import {AWSS3Service} from '../../aws/aws-s3.service';
import {getTimestamp} from '../../common/get-timestamp';
import {PostEntity} from '../../database/post/post.entity';
import {SingleVideoPostPipe} from './single-video-post.pipe';
import {HasSession} from '../../session/has-session.decorator';
import {GetSession} from '../../session/get-session.decorator';
import {singleVideoPostWire} from '../../database/post/post.wire';
import {PostRepository} from '../../database/post/post.repository';
import {SessionEntity} from '../../database/session/session.entity';
import {SingleVideoPostService} from './single-video-post.service';
import {ErrorCode, PostType, SingleVideoPostWire} from '@simpd/types';
import {
  CreateSingleVideoPostDTO,
  UpdateSingleVideoPostDTO,
} from './single-video-post.dto';
import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  InternalServerErrorException,
} from '@nestjs/common';

@Controller('posts/single-video')
@HasSession()
export class SingleVideoPostController {
  constructor(
    private readonly postService: PostService,
    private readonly postRepo: PostRepository,
    private readonly awsS3Service: AWSS3Service,
    private readonly singleVideoPostService: SingleVideoPostService
  ) {}

  @Post()
  async createSingleVideoPost(
    @Body() createSingleVideoPostDTO: CreateSingleVideoPostDTO,
    @GetSession() session: SessionEntity
  ): Promise<SingleVideoPostWire> {
    const newSingleVideoPost = await this.postRepo.create({
      userID: session.userID,
      profileID: session.profileID,
      type: PostType.SingleVideo,
      content: createSingleVideoPostDTO.content,
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
    });
    await this.singleVideoPostService.updateMediaForPost(
      newSingleVideoPost,
      createSingleVideoPostDTO.mediaID,
      session.userID
    );
    const singleVideoPostWithMedia = await this.postRepo.findOneOrFail({
      id: newSingleVideoPost.id!,
    });

    const postVideo = singleVideoPostWithMedia.media?.[0]?.media;

    if (!postVideo) {
      throw new InternalServerErrorException(ErrorCode.PostWireMissingMedia);
    }

    const videoURL = await this.awsS3Service.getObjectURL(postVideo.s3Key);

    return singleVideoPostWire(singleVideoPostWithMedia, videoURL);
  }

  @Patch(':postID')
  async updateSingleVideoPostByID(
    @Param('postID', SingleVideoPostPipe) post: PostEntity,
    @GetSession() session: SessionEntity,
    @Body() updateSingleVideoPostDTO: UpdateSingleVideoPostDTO
  ): Promise<void> {
    this.postService.userOwnsPost(post, session.userID);
    await this.postRepo.update(
      {id: post.id!},
      {content: updateSingleVideoPostDTO.content}
    );

    if (updateSingleVideoPostDTO.mediaID) {
      await this.singleVideoPostService.updateMediaForPost(
        post,
        updateSingleVideoPostDTO.mediaID,
        session.userID
      );
    }
  }
}
