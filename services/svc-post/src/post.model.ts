import {PostType, PostWire, ProfileModel, TagModel} from '@simpd/lib-client';
import {
  Field,
  InterfaceType,
  ObjectType,
  createUnionType,
} from '@nestjs/graphql';

@InterfaceType()
export class PostBaseModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;

  @Field(() => ProfileModel, {nullable: true})
  profile?: ProfileModel;

  @Field(() => PostType, {nullable: true})
  type?: PostType;

  @Field(() => Number, {nullable: true})
  totalShares?: number;

  @Field(() => String, {nullable: true})
  content?: string;

  @Field(() => [Number], {nullable: true})
  tagIDs?: number[];
}

@ObjectType({implements: () => PostBaseModel})
export class PostWithTextModel extends PostBaseModel {
  @Field(() => PostType, {nullable: true})
  type?: PostType.Text;
}

@ObjectType({implements: () => PostBaseModel})
export class PostWithImageModel extends PostBaseModel {
  @Field(() => PostType, {nullable: true})
  type?: PostType.Image;

  @Field(() => Number, {nullable: true})
  mediaID?: number;
}

@ObjectType({implements: () => PostBaseModel})
export class PostWithVideoModel extends PostBaseModel {
  @Field(() => PostType, {nullable: true})
  type?: PostType.Video;

  @Field(() => Number, {nullable: true})
  mediaID?: number;
}

@ObjectType({implements: () => PostBaseModel})
export class PostWithAlbumModel extends PostBaseModel {
  @Field(() => PostType, {nullable: true})
  type?: PostType.Album;

  @Field(() => [Number!], {nullable: true})
  mediaIDs?: number[];
}

@ObjectType({implements: () => PostBaseModel})
export class PostWithSharedContentModel extends PostBaseModel {
  @Field(() => PostType, {nullable: true})
  type?: PostType.SharedContent;

  @Field(() => Number, {nullable: true})
  postID?: number;
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
