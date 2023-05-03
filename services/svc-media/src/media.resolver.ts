import {In} from 'typeorm';
import {MediaEntity} from './media.entity';
import {MediaRepository} from './media.repository';
import {UnauthorizedException} from '@nestjs/common';
import {GetSession, HasSession} from '@simpd/lib-api';
import {mediaEntityToMediaWithTextWire} from './media.wire';
import {BaseMediaModel, MediaWithTextModel} from './media.model';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  MediaType,
  MediaWire,
  MediaWithTextWire,
  ProfileClientService,
  SessionWire,
} from '@simpd/lib-client';
import {
  MediaFilterByManyInput,
  MediaFilterByOneInput,
  MediaWithTextCreateInput,
} from './media.input';

@Resolver(() => BaseMediaModel)
export class MediaResolver {
  constructor(
    private readonly mediaRepo: MediaRepository<MediaWire>,
    private readonly profileClientService: ProfileClientService,
    private readonly textMediaRepo: MediaRepository<MediaWithTextWire>
  ) {}

  // TODO: Add Privacy Guard
  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<MediaEntity> {
    return this.media({id: reference.id});
  }

  @Query(() => BaseMediaModel)
  async media(
    @Args('filter') filter: MediaFilterByOneInput
  ): Promise<MediaEntity> {
    return this.mediaRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [BaseMediaModel])
  medias(
    @Args('filter', {type: () => MediaFilterByManyInput, nullable: true})
    filter?: MediaFilterByManyInput
  ): Promise<MediaEntity[]> {
    return this.mediaRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        profileID: filter?.profileIDs && In(filter.profileIDs),
      },
    });
  }

  @Mutation(() => MediaWithTextModel)
  @HasSession()
  async mediaWithTextCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: MediaWithTextCreateInput
  ): Promise<MediaWithTextWire> {
    const matchingProfile = await this.profileClientService.findOneByID({
      id: input.profileID,
    });

    if (matchingProfile?.userID !== session.userID) {
      throw new UnauthorizedException();
    }

    const newTextMedia = await this.textMediaRepo.create({
      profileID: matchingProfile.id,
      mediaData: {
        content: input.content,
      },
      mediaType: MediaType.Text,
    });
    return mediaEntityToMediaWithTextWire(newTextMedia);
  }

  @Mutation(() => Boolean)
  async mediaDelete(@Args('filter') filter: MediaFilterByOneInput) {
    await this.mediaRepo.delete(filter);
    return true;
  }
}
