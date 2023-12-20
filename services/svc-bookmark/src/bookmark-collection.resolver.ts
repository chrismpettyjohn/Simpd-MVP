import {In} from 'typeorm';
import RandomWords from 'random-words';
import {UnauthorizedException} from '@nestjs/common';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {BookmarkCollectionModel} from './bookmark-collection.model';
import {BookmarkCollectionRepository} from './bookmark-collection.repository';
import {BookmarkCollectionEntity} from './bookmark-collection.entity';
import {
  BookmarkCollectionCreateInput,
  BookmarkCollectionFindManyInput,
  BookmarkCollectionFindOneInput,
  BookmarkCollectionUpdateInput,
} from './bookmark-collection.input';

@Resolver(() => BookmarkCollectionModel)
export class BookmarkCollectionResolver {
  constructor(
    private readonly bookmarkCollectionRepo: BookmarkCollectionRepository
  ) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<BookmarkCollectionEntity> {
    return this.bookmarkCollection({id: reference.id});
  }

  @Query(() => BookmarkCollectionModel)
  async bookmarkCollection(
    @Args('filter') filter: BookmarkCollectionFindOneInput
  ): Promise<BookmarkCollectionEntity> {
    return this.bookmarkCollectionRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [BookmarkCollectionModel])
  bookmarkCollections(
    @Args('filter', {
      type: () => BookmarkCollectionFindManyInput,
      nullable: true,
    })
    filter?: BookmarkCollectionFindManyInput
  ): Promise<BookmarkCollectionEntity[]> {
    return this.bookmarkCollectionRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        profileID: filter?.profileIDs && In(filter.profileIDs),
      },
    });
  }

  @Mutation(() => BookmarkCollectionModel)
  @HasSession()
  async bookmarkCollectionCreate(
    @GetSession() session: SessionContents,
    @Args('input') input: BookmarkCollectionCreateInput
  ): Promise<BookmarkCollectionEntity> {
    const newBookmarkCollection = await this.bookmarkCollectionRepo.create({
      profileID: session.profileID,
      name: input.name,
    });
    return newBookmarkCollection;
  }

  @Mutation(() => BookmarkCollectionModel)
  @HasSession()
  async bookmarkCollectionCreateRandomized(
    @GetSession() session: SessionContents
  ): Promise<BookmarkCollectionEntity> {
    const words = RandomWords(1);
    const bookmarkName = words[0];

    const newBookmarkCollection = await this.bookmarkCollectionRepo.create({
      profileID: session.profileID,
      name: bookmarkName,
    });
    return newBookmarkCollection;
  }

  @Mutation(() => Boolean)
  @HasSession()
  async bookmarkCollectionUpdate(
    @GetSession() session: SessionContents,
    @Args('filter') filter: BookmarkCollectionFindOneInput,
    @Args('input') input: BookmarkCollectionUpdateInput
  ): Promise<boolean> {
    const matchingBookmarkCollection =
      await this.bookmarkCollectionRepo.findOneOrFail({where: {id: filter.id}});
    const doesBookmarkCollectionBelongToUser =
      matchingBookmarkCollection.profileID === session.profileID;
    if (!doesBookmarkCollectionBelongToUser) {
      throw new UnauthorizedException();
    }
    await this.bookmarkCollectionRepo.update(
      {id: filter.id, profileID: session.profileID},
      input
    );
    return true;
  }

  @Mutation(() => Boolean)
  @HasSession()
  async bookmarkCollectionDelete(
    @GetSession() session: SessionContents,
    @Args('filter') filter: BookmarkCollectionFindOneInput
  ) {
    const matchingBookmarkCollection =
      await this.bookmarkCollectionRepo.findOneOrFail({where: {id: filter.id}});
    const doesAlbumBelongToUser =
      matchingBookmarkCollection.profileID === session.profileID;
    if (!doesAlbumBelongToUser) {
      throw new UnauthorizedException();
    }
    await this.bookmarkCollectionRepo.softDelete(filter);
    return true;
  }
}
