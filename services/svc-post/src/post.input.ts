import {Field, InputType} from '@nestjs/graphql';
import {PostSharedContentType} from '@simpd/lib-client';

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

@InputType()
export class PostWithTextCreateInput {
  @Field(() => String)
  content!: string;
}

@InputType()
export class PostWithImageCreateInput {
  @Field(() => Number)
  mediaID!: number;

  @Field(() => String)
  caption!: string;
}

@InputType()
export class PostWithVideoCreateInput {
  @Field(() => Number)
  mediaID!: number;

  @Field(() => String)
  caption!: string;
}

@InputType()
export class PostWithAlbumInput {
  @Field(() => [Number!])
  mediaIDs!: number[];

  @Field(() => String)
  caption!: string;
}

@InputType()
export class PostWithSharedContentInput {
  @Field(() => PostSharedContentType)
  resourceType!: PostSharedContentType;

  @Field(() => Number)
  resourceID!: number;

  @Field(() => String)
  caption!: string;
}
