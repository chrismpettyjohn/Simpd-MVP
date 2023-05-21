import {In} from 'typeorm';
import {BookmarkModel} from './bookmark.model';
import {BookmarkEntity} from './bookmark.entity';
import {BookmarkRepository} from './bookmark.repository';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  BookmarkCreateInput,
  BookmarkFindManyInput,
  BookmarkFindOneInput,
} from './bookmark.input';

@Resolver(() => BookmarkModel)
export class BookmarkResolver {
  constructor(private readonly bookmarkRepo: BookmarkRepository) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<BookmarkEntity> {
    return this.bookmark({id: reference.id});
  }

  @Query(() => BookmarkModel)
  async bookmark(
    @Args('filter') filter: BookmarkFindOneInput
  ): Promise<BookmarkEntity> {
    return this.bookmarkRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [BookmarkModel])
  bookmarks(
    @Args('filter', {type: () => BookmarkFindManyInput, nullable: true})
    filter?: BookmarkFindManyInput
  ): Promise<BookmarkEntity[]> {
    return this.bookmarkRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
      },
    });
  }

  @Mutation(() => BookmarkModel)
  @HasSession()
  async bookmarkCreate(
    @GetSession() session: SessionContents,
    @Args('input') input: BookmarkCreateInput
  ): Promise<BookmarkEntity> {
    const newBookmark = await this.bookmarkRepo.create({
      type: input.type,
      profileID: session.profileID,
      resourceID: input.resourceID,
      bookmarkCollectionID: input.bookmarkCollectionID,
    });
    return newBookmark;
  }

  @Mutation(() => Boolean)
  async bookmarkDelete(@Args('filter') filter: BookmarkFindOneInput) {
    await this.bookmarkRepo.softDelete(filter);
    return true;
  }
}
