import {In} from 'typeorm';
import {AlbumModel} from './album.model';
import {AlbumEntity} from './album.entity';
import {AlbumRepository} from './album.repository';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  AlbumCreateInput,
  AlbumFindManyInput,
  AlbumFindOneInput,
} from './album.input';

@Resolver(() => AlbumModel)
export class AlbumResolver {
  constructor(private readonly albumRepo: AlbumRepository) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<AlbumEntity> {
    return this.album({id: reference.id});
  }

  @Query(() => AlbumModel)
  async album(@Args('filter') filter: AlbumFindOneInput): Promise<AlbumEntity> {
    return this.albumRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [AlbumModel])
  albums(
    @Args('filter', {type: () => AlbumFindManyInput, nullable: true})
    filter?: AlbumFindManyInput
  ): Promise<AlbumEntity[]> {
    return this.albumRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
      },
    });
  }

  @Mutation(() => AlbumModel)
  @HasSession()
  async albumCreate(
    @GetSession() session: SessionContents,
    @Args('input') input: AlbumCreateInput
  ): Promise<AlbumEntity> {
    const newAlbum = await this.albumRepo.create({
      profileID: session.profileID,
      name: input.name,
      description: input.description,
    });
    return newAlbum;
  }

  @Mutation(() => Boolean)
  async albumDelete(@Args('filter') filter: AlbumFindOneInput) {
    await this.albumRepo.softDelete(filter);
    return true;
  }
}
