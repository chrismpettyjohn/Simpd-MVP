import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class BookmarkCollectionFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  profileIDs?: number[];
}

@InputType()
export class BookmarkCollectionFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;
}

@InputType()
export class BookmarkCollectionCreateInput {
  @Field(() => String)
  name!: string;
}
