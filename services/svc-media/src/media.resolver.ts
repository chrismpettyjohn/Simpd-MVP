import {In} from 'typeorm';
import {MediaModel} from './media.model';
import {MediaService} from './media.service';
import {MediaRepository} from './media.repository';
import {mediaEntityToMediaWire} from './media.wire';
import {MediaFilterByManyInput, MediaFilterByOneInput} from './media.input';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {MediaWire} from '@simpd/lib-client';

@Resolver(() => MediaModel)
export class MediaResolver {
  constructor(
    private readonly mediaRepo: MediaRepository,
    private readonly mediaService: MediaService
  ) {}

  // TODO: Add Privacy Guard
  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<MediaModel> {
    return this.media({id: reference.id});
  }

  @ResolveField(() => String)
  url(@Parent() media: MediaWire): Promise<string> {
    return this.mediaService.getUrl(media.location.awsS3Key);
  }

  @Query(() => MediaModel)
  async media(
    @Args('filter') filter: MediaFilterByOneInput
  ): Promise<MediaModel> {
    const matchingMedia = await this.mediaRepo.findOneOrFail({
      where: filter,
    });
    return mediaEntityToMediaWire(matchingMedia);
  }

  @Query(() => [MediaModel])
  async medias(
    @Args('filter', {type: () => MediaFilterByManyInput, nullable: true})
    filter?: MediaFilterByManyInput
  ): Promise<MediaModel[]> {
    const matchingMedia = await this.mediaRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        profileID: filter?.profileIDs && In(filter.profileIDs),
      },
    });
    return matchingMedia.map(mediaEntityToMediaWire);
  }

  @Mutation(() => Boolean)
  async mediaDelete(@Args('filter') filter: MediaFilterByOneInput) {
    await this.mediaRepo.softDelete(filter);
    return true;
  }
}
