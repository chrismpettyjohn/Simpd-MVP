import {In} from 'typeorm';
import {MediaModel} from './media.model';
import {MediaRepository} from './media.repository';
import {mediaEntityToMediaWire} from './media.wire';
import {UnauthorizedException} from '@nestjs/common';
import {GetSession, HasSession} from '@simpd/lib-api';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {MediaType, ProfileClientService, SessionWire} from '@simpd/lib-client';
import {
  MediaCreateInput,
  MediaFilterByManyInput,
  MediaFilterByOneInput,
} from './media.input';

@Resolver(() => MediaModel)
export class MediaResolver {
  constructor(
    private readonly mediaRepo: MediaRepository,
    private readonly profileClientService: ProfileClientService
  ) {}

  // TODO: Add Privacy Guard
  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<MediaModel> {
    return this.media({id: reference.id});
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

  @Mutation(() => MediaModel)
  @HasSession()
  async mediaCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: MediaCreateInput
  ): Promise<MediaModel> {
    const matchingProfile = await this.profileClientService.findOneByID({
      id: input.profileID,
    });

    if (matchingProfile?.userID !== session.userID) {
      throw new UnauthorizedException();
    }

    const newMedia = await this.mediaRepo.create({
      profileID: matchingProfile.id,
      mediaDetails: {
        sizeInBytes: 0,
        originalFileName: '',
      },
      mediaLocation: {
        awsS3Location: '',
      },
      mediaType: MediaType.Image,
    });
    return mediaEntityToMediaWire(newMedia);
  }

  @Mutation(() => Boolean)
  async mediaDelete(@Args('filter') filter: MediaFilterByOneInput) {
    await this.mediaRepo.delete(filter);
    return true;
  }
}
