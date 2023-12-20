import {In} from 'typeorm';
import {UnauthorizedException} from '@nestjs/common';
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
  BookmarkUpdateInput,
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
      profileID: session.profileID,
      resourceID: input.resourceID,
      bookmarkCollectionID: input.bookmarkCollectionID,
    });
    return newBookmark;
  }

  @Mutation(() => Boolean)
  @HasSession()
  async bookmarkUpdate(
    @GetSession() session: SessionContents,
    @Args('filter') filter: BookmarkFindOneInput,
    @Args('input') input: BookmarkUpdateInput
  ): Promise<boolean> {
    const matchingBookmark = await this.bookmarkRepo.findOneOrFail({
      where: {id: filter.id},
    });
    const doesBookmarkBelongToUser =
      matchingBookmark.profileID === session.profileID;
    if (!doesBookmarkBelongToUser) {
      throw new UnauthorizedException();
    }
    await this.bookmarkRepo.update(
      {id: filter.id, profileID: session.profileID},
      input
    );
    return true;
  }

  @Mutation(() => Boolean)
  @HasSession()
  async bookmarkDelete(
    @GetSession() session: SessionContents,
    @Args('filter') filter: BookmarkFindOneInput
  ) {
    const matchingBookmark = await this.bookmarkRepo.findOneOrFail({
      where: {id: filter.id},
    });
    const doesAlbumBelongToUser =
      matchingBookmark.profileID === session.profileID;
    if (!doesAlbumBelongToUser) {
      throw new UnauthorizedException();
    }
    await this.bookmarkRepo.softDelete(filter);
    return true;
  }
}
