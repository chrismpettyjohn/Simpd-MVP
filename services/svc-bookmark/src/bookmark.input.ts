import {BookmarkType} from '@simpd/lib-client';
import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class BookmarkFindOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => BookmarkType, {nullable: true})
  type?: BookmarkType;

  @Field(() => Number, {nullable: true})
  profileID?: number;

  @Field(() => Number, {nullable: true})
  resourceID?: number;

  @Field(() => Number, {nullable: true})
  bookmarkCollectionID?: number;
}

@InputType()
export class BookmarkFindManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [BookmarkType], {nullable: true})
  types?: BookmarkType[];

  @Field(() => [Number], {nullable: true})
  profileIDs?: number[];

  @Field(() => [Number], {nullable: true})
  resourceIDs?: number[];

  @Field(() => [Number], {nullable: true})
  bookmarkCollectionIDs?: number[];
}

@InputType()
export class BookmarkCreateInput {
  @Field(() => BookmarkType)
  type!: BookmarkType;

  @Field(() => Number)
  resourceID!: number;

  @Field(() => Number)
  bookmarkCollectionID!: number;
}
