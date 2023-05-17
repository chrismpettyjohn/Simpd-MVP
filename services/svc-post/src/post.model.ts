import { PostSharedContentType } from '@simpd/lib-client';
import { Directive, Field, InterfaceType, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class BasePostModel {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => Number, { nullable: true })
  profileID?: number; // TODO: Add Privacy Guard
}

@ObjectType()
export class PostWithTextModel extends BasePostModel {
  @Field(() => String, { nullable: true })
  content?: string;
}

@ObjectType()
export class PostWithImageModel extends BasePostModel {
  @Field(() => Number, { nullable: true })
  mediaID?: number;

  @Field(() => String, { nullable: true })
  caption?: string;
}

@ObjectType()
export class PostWithVideoModel extends BasePostModel {
  @Field(() => Number, { nullable: true })
  mediaID?: number;

  @Field(() => String, { nullable: true })
  caption?: string;
}

@ObjectType()
export class PostWithAlbumModel extends BasePostModel {
  @Field(() => [Number!], { nullable: true })
  mediaIDs?: number[];

  @Field(() => String, { nullable: true })
  caption?: string;
}

@ObjectType()
export class PostWithSharedContentModel extends BasePostModel {
  @Field(() => PostSharedContentType, { nullable: true })
  resourceType?: PostSharedContentType;

  @Field(() => Number, { nullable: true })
  resourceID?: number;

  @Field(() => String, { nullable: true })
  caption?: string;
}
