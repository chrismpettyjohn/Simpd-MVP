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
  @Field(() => Number)
  id!: number;
}

@InputType({})
export class PostWithTextCreateInput {
  @Field(() => String)
  content!: string;
}

@InputType()
export class PostWithImageCreateInput {
  @Field(() => String)
  content!: string;
  @Field(() => Number)
  mediaID!: number;
}

@InputType()
export class PostWithVideoCreateInput {
  @Field(() => String)
  content!: string;

  @Field(() => Number)
  mediaID!: number;
}

@InputType()
export class PostWithAlbumInput {
  @Field(() => String)
  content!: string;

  @Field(() => [Number!])
  mediaIDs!: number[];
}

@InputType()
export class PostWithSharedContentInput {
  @Field(() => String)
  content!: string;

  @Field(() => Number)
  postID!: number;
}
