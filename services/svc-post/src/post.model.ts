import {Directive, Field, ObjectType, createUnionType} from '@nestjs/graphql';
import {
  PostSharedContentType,
  PostType,
  PostWire,
  ProfileModel,
} from '@simpd/lib-client';

@ObjectType()
@Directive('@key(fields: "id")')
export class PostWithTextModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;

  @Field(() => ProfileModel, {nullable: true})
  profile?: ProfileModel;

  @Field(() => PostType, {nullable: true})
  type?: PostType.Text;

  @Field(() => String, {nullable: true})
  content?: string;
}

@ObjectType()
@Directive('@key(fields: "id")')
export class PostWithImageModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;

  @Field(() => ProfileModel, {nullable: true})
  profile?: ProfileModel;

  @Field(() => PostType, {nullable: true})
  type?: PostType.Image;

  @Field(() => Number, {nullable: true})
  mediaID?: number;

  @Field(() => String, {nullable: true})
  caption?: string;
}

@ObjectType()
@Directive('@key(fields: "id")')
export class PostWithVideoModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;

  @Field(() => ProfileModel, {nullable: true})
  profile?: ProfileModel;

  @Field(() => PostType, {nullable: true})
  type?: PostType.Video;

  @Field(() => Number, {nullable: true})
  mediaID?: number;

  @Field(() => String, {nullable: true})
  caption?: string;
}

@ObjectType()
@Directive('@key(fields: "id")')
export class PostWithAlbumModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;

  @Field(() => ProfileModel, {nullable: true})
  profile?: ProfileModel;

  @Field(() => PostType, {nullable: true})
  type?: PostType.Album;

  @Field(() => [Number!], {nullable: true})
  mediaIDs?: number[];

  @Field(() => String, {nullable: true})
  caption?: string;
}

@ObjectType()
@Directive('@key(fields: "id")')
export class PostWithSharedContentModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;

  @Field(() => ProfileModel, {nullable: true})
  profile?: ProfileModel;

  @Field(() => PostType, {nullable: true})
  type?: PostType.SharedContent;

  @Field(() => PostSharedContentType, {nullable: true})
  resourceType?: PostSharedContentType;

  @Field(() => Number, {nullable: true})
  resourceID?: number;

  @Field(() => String, {nullable: true})
  caption?: string;
}

export const PostUnion = createUnionType({
  name: 'PostUnion',
  types: () =>
    [
      PostWithTextModel,
      PostWithImageModel,
      PostWithVideoModel,
      PostWithAlbumModel,
      PostWithSharedContentModel,
    ] as const,
  resolveType: (value: PostWire) => {
    if (value.type === PostType.Text) {
      return PostWithTextModel;
    }

    if (value.type === PostType.Image) {
      return PostWithImageModel;
    }

    if (value.type === PostType.Video) {
      return PostWithVideoModel;
    }

    if (value.type === PostType.Album) {
      return PostWithAlbumModel;
    }

    if (value.type === PostType.SharedContent) {
      return PostWithSharedContentModel;
    }

    throw new Error('invalid post type specified');
  },
});
