import {Injectable} from '@nestjs/common';
import {MediaService} from '../../media/media.service';
import {PostEntity} from '../../database/post/post.entity';
import {MediaAlbumPostContentDTO} from './media-album-post.dto';
import {MediaRepository} from '../../database/media/media.repository';
import {PostMediaRepository} from '../../database/post/post-media.repository';

@Injectable()
export class MediaAlbumPostService {
  constructor(
    private readonly postMediaRepo: PostMediaRepository,
    private readonly mediaRepo: MediaRepository,
    private readonly mediaService: MediaService
  ) {}

  async updateMediaForPost(
    post: PostEntity,
    mediaAlbumContent: MediaAlbumPostContentDTO[],
    userID: number
  ): Promise<void> {
    await this.postMediaRepo.delete({postID: post.id!});

    for (const mediaContent of mediaAlbumContent) {
      const mediaRecord = await this.mediaRepo.findOneOrFail({
        id: mediaContent.mediaID,
      });
      this.mediaService.isMediaOwner(mediaRecord, userID);
      await this.postMediaRepo.create({
        postID: post.id!,
        mediaID: mediaContent.mediaID,
        order: mediaContent.order,
      });
    }
  }
}
