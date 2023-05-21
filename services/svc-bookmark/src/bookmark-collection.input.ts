import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class BookmarkCollectionFindManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  profileIDs?: number[];
}

@InputType()
export class BookmarkCollectionFindOneInput {
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
