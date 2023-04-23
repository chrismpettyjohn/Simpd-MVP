import {PostService} from '../post.service';
import {AWSS3Service} from '../../aws/aws-s3.service';
import {getTimestamp} from '../../common/get-timestamp';
import {PostEntity} from '../../database/post/post.entity';
import {SinglePhotoPostPipe} from './single-photo-post.pipe';
import {HasSession} from '../../session/has-session.decorator';
import {GetSession} from '../../session/get-session.decorator';
import {singlePhotoPostWire} from '../../database/post/post.wire';
import {SinglePhotoPostService} from './single-photo-post.service';
import {PostRepository} from '../../database/post/post.repository';
import {SessionEntity} from '../../database/session/session.entity';
import {ErrorCode, PostType, SinglePhotoPostWire} from '@simpd/types';
import {
  CreateSinglePhotoPostDTO,
  UpdateSinglePhotoPostDTO,
} from './single-photo-post.dto';
import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  InternalServerErrorException,
} from '@nestjs/common';

@Controller('posts/single-photo')
@HasSession()
export class SinglePhotoPostController {
  constructor(
    private readonly postService: PostService,
    private readonly postRepo: PostRepository,
    private readonly awsS3Service: AWSS3Service,
    private readonly singleVideoPostService: SinglePhotoPostService
  ) {}

  @Post()
  async createSinglePhotoPost(
    @Body() createSinglePhotoPostDTO: CreateSinglePhotoPostDTO,
    @GetSession() session: SessionEntity
  ): Promise<SinglePhotoPostWire> {
    const newSinglePhotoPost = await this.postRepo.create({
      userID: session.userID,
      profileID: session.profileID,
      type: PostType.SinglePhoto,
      content: createSinglePhotoPostDTO.content,
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
    });
    await this.singleVideoPostService.updateMediaForPost(
      newSinglePhotoPost,
      createSinglePhotoPostDTO.mediaID,
      session.userID
    );
    const singleVideoPostWithMedia = await this.postRepo.findOneOrFail({
      id: newSinglePhotoPost.id!,
    });

    const postPhoto = singleVideoPostWithMedia.media?.[0]?.media;

    if (!postPhoto) {
      throw new InternalServerErrorException(ErrorCode.PostWireMissingMedia);
    }

    const photoURL = await this.awsS3Service.getObjectURL(postPhoto.s3Key);

    return singlePhotoPostWire(singleVideoPostWithMedia, photoURL);
  }

  @Patch(':postID')
  async updateSinglePhotoPostByID(
    @Param('postID', SinglePhotoPostPipe) post: PostEntity,
    @GetSession() session: SessionEntity,
    @Body() updateSinglePhotoPostDTO: UpdateSinglePhotoPostDTO
  ): Promise<void> {
    this.postService.userOwnsPost(post, session.userID);
    await this.postRepo.update(
      {id: post.id!},
      {content: updateSinglePhotoPostDTO.content}
    );

    if (updateSinglePhotoPostDTO.mediaID) {
      await this.singleVideoPostService.updateMediaForPost(
        post,
        updateSinglePhotoPostDTO.mediaID,
        session.userID
      );
    }
  }
}
