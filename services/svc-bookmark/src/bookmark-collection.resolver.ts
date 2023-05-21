import {In} from 'typeorm';
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
} from './bookmark-collection.input';

@Resolver(() => BookmarkCollectionModel)
export class BookmarkCollectionResolver {
  constructor(private readonly bookmarkRepo: BookmarkCollectionRepository) {}

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
    return this.bookmarkRepo.findOneOrFail({
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
    return this.bookmarkRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
      },
    });
  }

  @Mutation(() => BookmarkCollectionModel)
  @HasSession()
  async bookmarkCollectionCreate(
    @GetSession() session: SessionContents,
    @Args('input') input: BookmarkCollectionCreateInput
  ): Promise<BookmarkCollectionEntity> {
    const newBookmarkCollection = await this.bookmarkRepo.create({
      profileID: session.profileID,
      name: input.name,
    });
    return newBookmarkCollection;
  }

  @Mutation(() => Boolean)
  async bookmarkCollectionDelete(
    @Args('filter') filter: BookmarkCollectionFindOneInput
  ) {
    await this.bookmarkRepo.softDelete(filter);
    return true;
  }
}
