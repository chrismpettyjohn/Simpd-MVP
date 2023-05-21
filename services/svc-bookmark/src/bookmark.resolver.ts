import {In} from 'typeorm';
import {BookmarkModel} from './bookmark.model';
import {BookmarkEntity} from './bookmark.entity';
import {HasSession} from '@simpd/lib-api';
import {BookmarkRepository} from './bookmark.repository';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  BookmarkCreateInput,
  BookmarkFilterByManyInput,
  BookmarkFilterByOneInput,
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
    @Args('filter') filter: BookmarkFilterByOneInput
  ): Promise<BookmarkEntity> {
    return this.bookmarkRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [BookmarkModel])
  bookmarks(
    @Args('filter', {type: () => BookmarkFilterByManyInput, nullable: true})
    filter?: BookmarkFilterByManyInput
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
    @Args('input') input: BookmarkCreateInput
  ): Promise<BookmarkEntity> {
    const newBookmark = await this.bookmarkRepo.create({});
    return newBookmark;
  }

  @Mutation(() => Boolean)
  async bookmarkDelete(@Args('filter') filter: BookmarkFilterByOneInput) {
    await this.bookmarkRepo.softDelete(filter);
    return true;
  }
}
