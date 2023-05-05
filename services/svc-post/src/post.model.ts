import {Directive, Field, InterfaceType, ObjectType} from '@nestjs/graphql';

@InterfaceType()
@Directive('@key(fields: "id")')
export class BasePostModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  profileID?: string; // TODO: Add Privacy Guard
}

@ObjectType()
export class PostWithTextModel extends BasePostModel {
  @Field(() => String, {nullable: true})
  content?: string;
}

@ObjectType()
export class PostWithImageModel extends BasePostModel {
  @Field(() => Number, {nullable: true})
  profileID?: string;

  @Field(() => Number, {nullable: true})
  mediaID?: number;

  @Field(() => String, {nullable: true})
  caption?: string;
}

@ObjectType()
export class PostWithVideoModel extends BasePostModel {
  @Field(() => Number, {nullable: true})
  profileID?: string;

  @Field(() => Number, {nullable: true})
  mediaID?: number;

  @Field(() => String, {nullable: true})
  caption?: string;
}

@ObjectType()
export class PostWithAlbumModel extends BasePostModel {
  @Field(() => Number, {nullable: true})
  profileID?: string;

  @Field(() => [Number!], {nullable: true})
  mediaIDs?: number[];

  @Field(() => String, {nullable: true})
  caption?: string;
}
