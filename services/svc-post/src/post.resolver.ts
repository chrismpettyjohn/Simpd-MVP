import {In} from 'typeorm';
import {PostEntity} from './post.entity';
import {PostRepository} from './post.repository';
import {GetSession, HasSession} from '@simpd/lib-api';
import {UnauthorizedException, BadRequestException} from '@nestjs/common';
import {
  postEntityToPostWithAlbumWire,
  postEntityToPostWithImageWire,
  postEntityToPostWithSharedContentWire,
  postEntityToPostWithTextWire,
  postEntityToPostWithVideoWire,
} from './post.wire';
import {
  BasePostModel,
  PostWithAlbumModel,
  PostWithImageModel,
  PostWithSharedContentModel,
  PostWithTextModel,
  PostWithVideoModel,
} from './post.model';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  MediaClientService,
  MediaType,
  PostType,
  PostWithAlbumWire,
  PostWithImageWire,
  PostWithSharedContentWire,
  PostWithTextWire,
  PostWithVideoWire,
  ProfileClientService,
  SessionWire,
} from '@simpd/lib-client';
import {
  PostFilterByManyInput,
  PostFilterByOneInput,
  PostWithAlbumInput,
  PostWithImageCreateInput,
  PostWithSharedContentInput,
  PostWithTextCreateInput,
  PostWithVideoCreateInput,
} from './post.input';

@Resolver(() => BasePostModel)
export class PostResolver {
  constructor(
    private readonly postRepo: PostRepository<any, any>,
    private readonly mediaClientService: MediaClientService,
    private readonly profileClientService: ProfileClientService,
    private readonly textPostRepo: PostRepository<
      PostWithTextWire,
      PostType.Text
    >,
    private readonly imagePostRepo: PostRepository<
      PostWithImageWire,
      PostType.Image
    >,
    private readonly videoPostRepo: PostRepository<
      PostWithImageWire,
      PostType.Video
    >,
    private readonly albumPostRepo: PostRepository<
      PostWithAlbumWire,
      PostType.Album
    >,
    private readonly sharedContentPostRepo: PostRepository<
      PostWithSharedContentWire,
      PostType.SharedContent
    >
  ) {}

  // TODO: Add Privacy Guard
  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<PostEntity> {
    return this.post({id: reference.id});
  }

  @Query(() => BasePostModel)
  async post(
    @Args('filter') filter: PostFilterByOneInput
  ): Promise<PostEntity> {
    return this.postRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [BasePostModel])
  posts(
    @Args('filter', {type: () => PostFilterByManyInput, nullable: true})
    filter?: PostFilterByManyInput
  ): Promise<PostEntity[]> {
    return this.postRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        profileID: filter?.profileIDs && In(filter.profileIDs),
      },
    });
  }

  @Mutation(() => PostWithTextModel)
  @HasSession()
  async postWithTextCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: PostWithTextCreateInput
  ): Promise<PostWithTextWire> {
    const matchingProfile = await this.profileClientService.findOneByID({
      id: input.profileID,
    });

    if (matchingProfile?.userID !== session.userID) {
      throw new UnauthorizedException();
    }

    const newTextPost = await this.textPostRepo.create({
      profileID: matchingProfile.id,
      postData: {
        content: input.content,
      },
      postType: PostType.Text,
    });
    return postEntityToPostWithTextWire(newTextPost);
  }

  @Mutation(() => PostWithImageModel)
  @HasSession()
  async postWithImageCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: PostWithImageCreateInput
  ): Promise<PostWithImageWire> {
    const [matchingProfile, matchingImage] = await Promise.all([
      this.profileClientService.findOneByID({
        id: input.profileID,
      }),
      this.mediaClientService.findOneByID({id: input.mediaID}),
    ]);

    const userOwnsProfile = matchingProfile?.userID === session.userID;
    const userOwnsMedia = matchingImage?.profileID === matchingProfile?.id;

    if (!userOwnsProfile || !userOwnsMedia) {
      throw new UnauthorizedException();
    }

    const mediaIsImage = matchingImage?.type === MediaType.Image;

    if (!mediaIsImage) {
      throw new BadRequestException('media is not image');
    }

    const newImagePost = await this.imagePostRepo.create({
      profileID: matchingProfile.id,
      postData: {
        mediaID: input.mediaID,
        caption: input.caption,
      },
      postType: PostType.Image,
    });
    return postEntityToPostWithImageWire(newImagePost);
  }

  @Mutation(() => PostWithVideoModel)
  @HasSession()
  async postWithVideoCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: PostWithVideoCreateInput
  ): Promise<PostWithVideoWire> {
    const [matchingProfile, matchingVideo] = await Promise.all([
      this.profileClientService.findOneByID({
        id: input.profileID,
      }),
      this.mediaClientService.findOneByID({id: input.mediaID}),
    ]);

    const userOwnsProfile = matchingProfile?.userID === session.userID;
    const userOwnsMedia = matchingVideo?.profileID === matchingProfile?.id;

    if (!userOwnsProfile || !userOwnsMedia) {
      throw new UnauthorizedException();
    }

    const mediaIsVideo = matchingVideo?.type === MediaType.Video;

    if (!mediaIsVideo) {
      throw new BadRequestException('media is not image');
    }

    const newVideoPost = await this.videoPostRepo.create({
      profileID: matchingProfile.id,
      postData: {
        mediaID: input.mediaID,
        caption: input.caption,
      },
      postType: PostType.Video,
    });
    return postEntityToPostWithVideoWire(newVideoPost);
  }

  @Mutation(() => PostWithAlbumModel)
  @HasSession()
  async postWithAlbumCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: PostWithAlbumInput
  ): Promise<PostWithAlbumWire> {
    const matchingProfile = await this.profileClientService.findOneByID({
      id: input.profileID,
    });

    const userOwnsProfile = matchingProfile?.userID === session.userID;

    if (!userOwnsProfile) {
      throw new UnauthorizedException();
    }

    const matchingMedia = await Promise.all(
      input.mediaIDs.map(_ => this.mediaClientService.findOneByID({id: _}))
    );

    const mediaOwnedByProfile = matchingMedia.filter(
      _ => _.profileID === matchingProfile.id
    );

    const userOwnsAllMedia =
      mediaOwnedByProfile.length === input.mediaIDs.length;

    if (!userOwnsAllMedia) {
      throw new UnauthorizedException();
    }

    const newAlbumPost = await this.albumPostRepo.create({
      profileID: matchingProfile.id,
      postData: {
        mediaIDs: input.mediaIDs,
        caption: input.caption,
      },
      postType: PostType.Album,
    });
    return postEntityToPostWithAlbumWire(newAlbumPost);
  }

  @Mutation(() => PostWithSharedContentModel)
  @HasSession()
  async postWithSharedContentCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: PostWithSharedContentInput
  ): Promise<PostWithSharedContentWire> {
    const matchingProfile = await this.profileClientService.findOneByID({
      id: input.profileID,
    });

    const userOwnsProfile = matchingProfile?.userID === session.userID;

    if (!userOwnsProfile) {
      throw new UnauthorizedException();
    }

    // TODO: Implement privacy check

    const newSharedContentPost = await this.sharedContentPostRepo.create({
      profileID: matchingProfile.id,
      postData: {
        resourceType: input.resourceType,
        resourceID: input.resourceID,
        caption: input.caption,
      },
      postType: PostType.SharedContent,
    });
    return postEntityToPostWithSharedContentWire(newSharedContentPost);
  }

  @Mutation(() => Boolean)
  async postDelete(@Args('filter') filter: PostFilterByOneInput) {
    await this.postRepo.delete(filter);
    return true;
  }
}
