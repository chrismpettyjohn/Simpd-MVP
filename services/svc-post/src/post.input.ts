import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class PostFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  profileIDs?: number[];
}

@InputType()
export class PostFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;
}

@InputType()
export class PostWithTextCreateInput {
  @Field(() => Number)
  profileID!: number;

  @Field(() => String)
  content!: string;
}

@InputType()
export class PostWithImageCreateInput {
  @Field(() => Number)
  profileID!: number;

  @Field(() => Number)
  mediaID!: number;

  @Field(() => String)
  caption!: string;
}

@InputType()
export class PostWithVideoCreateInput {
  @Field(() => Number)
  profileID!: number;

  @Field(() => Number)
  mediaID!: number;

  @Field(() => String)
  caption!: string;
}

@InputType()
export class PostWithAlbumInput {
  @Field(() => Number)
  profileID!: number;

  @Field(() => [Number!])
  mediaIDs!: number[];

  @Field(() => String)
  caption!: string;
}
