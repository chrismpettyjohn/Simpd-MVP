import {PostService} from '../post.service';
import {AWSS3Service} from '../../aws/aws-s3.service';
import {getTimestamp} from '../../common/get-timestamp';
import {PostEntity} from '../../database/post/post.entity';
import {MediaAlbumPostPipe} from './media-album-post.pipe';
import {PostType, MediaAlbumPostWire} from '@simpd/types';
import {HasSession} from '../../session/has-session.decorator';
import {GetSession} from '../../session/get-session.decorator';
import {mediaAlbumPostWire} from '../../database/post/post.wire';
import {MediaAlbumPostService} from './media-album-post.service';
import {PostRepository} from '../../database/post/post.repository';
import {SessionEntity} from '../../database/session/session.entity';
import {
  CreateMediaAlbumPostDTO,
  UpdateMediaAlbumPostDTO,
} from './media-album-post.dto';
import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('posts/media-album')
@HasSession()
export class MediaAlbumPostController {
  constructor(
    private readonly postService: PostService,
    private readonly postRepo: PostRepository,
    private readonly awsS3Service: AWSS3Service,
    private readonly mediaAlbumPostService: MediaAlbumPostService
  ) {}

  @Post()
  async createMediaAlbumPost(
    @Body() createMediaAlbumPostDTO: CreateMediaAlbumPostDTO,
    @GetSession() session: SessionEntity
  ): Promise<MediaAlbumPostWire> {
    const newMediaAlbumPost = await this.postRepo.create({
      userID: session.userID,
      profileID: session.profileID,
      type: PostType.MediaAlbum,
      content: createMediaAlbumPostDTO.content,
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
    });
    await this.mediaAlbumPostService.updateMediaForPost(
      newMediaAlbumPost,
      createMediaAlbumPostDTO.media,
      session.userID
    );
    const mediaAlbumPostWithMedia = await this.postRepo.findOneOrFail({
      id: newMediaAlbumPost.id!,
    });

    const mediaURLs = await Promise.all(
      mediaAlbumPostWithMedia.media!.map(_ =>
        this.awsS3Service.getObjectURL(_.media!.s3Key)
      )
    );
    return mediaAlbumPostWire(mediaAlbumPostWithMedia, mediaURLs);
  }

  @Patch(':postID')
  async updateMediaAlbumPostByID(
    @Param('postID', MediaAlbumPostPipe) post: PostEntity,
    @GetSession() session: SessionEntity,
    @Body() updateMediaAlbumPostDTO: UpdateMediaAlbumPostDTO
  ): Promise<void> {
    this.postService.userOwnsPost(post, session.userID);
    await this.postRepo.update(
      {id: post.id!},
      {content: updateMediaAlbumPostDTO.content}
    );

    if (updateMediaAlbumPostDTO.media) {
      await this.mediaAlbumPostService.updateMediaForPost(
        post,
        updateMediaAlbumPostDTO.media,
        session.userID
      );
    }
  }
}
