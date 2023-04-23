import {ErrorCode, MediaType} from '@simpd/types';
import {MediaService} from '../../media/media.service';
import {PostEntity} from '../../database/post/post.entity';
import {Injectable, BadRequestException} from '@nestjs/common';
import {MediaRepository} from '../../database/media/media.repository';
import {PostMediaRepository} from '../../database/post/post-media.repository';

@Injectable()
export class SingleVideoPostService {
  constructor(
    private readonly postMediaRepo: PostMediaRepository,
    private mediaService: MediaService,
    private readonly mediaRepo: MediaRepository
  ) {}

  async updateMediaForPost(
    post: PostEntity,
    mediaID: number,
    userID: number
  ): Promise<void> {
    const existingMedia = post?.media?.[0];

    if (existingMedia?.mediaID === mediaID) {
      return;
    }

    if (!existingMedia) {
      await this.postMediaRepo.create({
        postID: post.id!,
        mediaID,
        order: 1,
      });
    }

    const media = await this.mediaRepo.findOneOrFail({id: mediaID});

    this.mediaService.isMediaOwner(media, userID);

    if (media.fileType === MediaType.Photo) {
      throw new BadRequestException(ErrorCode.PostWrongMediaType);
    }

    await this.postMediaRepo.update({id: media!.id!}, {mediaID});
  }
}
