import { In } from 'typeorm';
import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';
import { GetSession, HasSession, SessionContents } from '@simpd/lib-api';
import { UnauthorizedException, BadRequestException } from '@nestjs/common';
import {
  postEntityToPostWire,
  postEntityToPostWithAlbumWire,
  postEntityToPostWithImageWire,
  postEntityToPostWithSharedContentWire,
  postEntityToPostWithTextWire,
  postEntityToPostWithVideoWire,
} from './post.wire';
import {
  PostUnion,
  PostWithAlbumModel,
  PostWithImageModel,
  PostWithSharedContentModel,
  PostWithTextModel,
  PostWithVideoModel,
} from './post.model';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  MediaClientService,
  MediaType,
  PostType,
  PostWire,
  PostWithAlbumWire,
  PostWithImageWire,
  PostWithSharedContentWire,
  PostWithTextWire,
  PostWithVideoWire,
  ProfileClientService,
  ProfileModel,
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
import { PostPrivacyService } from './post-privacy.service';

@Resolver(() => PostUnion)
export class PostResolver {
  constructor(
    private readonly postRepo: PostRepository<any, any>,
    private readonly postPrivacyService: PostPrivacyService,
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
  ) { }

  @ResolveField(() => ProfileModel, { nullable: true })
  profile(@Parent() post: PostWire): ProfileModel | null {
    return { id: post.profileID };
  }

  @ResolveReference()
  @HasSession()
  resolveReference(
    @GetSession() session: SessionContents,
    reference: {
      __typename: string;
      id: number;
    }
  ): Promise<PostEntity> {
    return this.post(session, { id: reference.id });
  }

  @Query(() => PostUnion)
  @HasSession()
  async post(
    @GetSession() session: SessionContents,
    @Args('filter') filter: PostFilterByOneInput
  ): Promise<PostEntity> {
    await this.postPrivacyService.profileCanAccessPost(
      session.profileID,
      filter.id
    );
    return this.postRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [PostUnion])
  @HasSession()
  async posts(
    @GetSession() session: SessionContents,
    @Args('filter', { type: () => PostFilterByManyInput, nullable: true })
    filter?: PostFilterByManyInput
  ): Promise<PostWire[]> {
    const matchingPosts = await this.postRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        profileID: filter?.profileIDs && In(filter.profileIDs),
      },
    });

    await Promise.all(
      matchingPosts.map(post =>
        this.postPrivacyService.profileCanAccessPost(
          session.profileID,
          post.id!
        )
      )
    );

    return matchingPosts.map(postEntityToPostWire);
  }

  @Mutation(() => PostWithTextModel)
  @HasSession()
  async postWithTextCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: PostWithTextCreateInput
  ): Promise<PostWithTextWire> {
    const matchingProfile = await this.profileClientService.findOne({
      id: session.profileID,
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
      this.profileClientService.findOne({
        id: session.profileID,
      }),
      this.mediaClientService.findOne({ id: input.mediaID }),
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
      this.profileClientService.findOne({
        id: session.profileID,
      }),
      this.mediaClientService.findOne({ id: input.mediaID }),
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
    const matchingProfile = await this.profileClientService.findOne({
      id: session.profileID,
    });

    const userOwnsProfile = matchingProfile?.userID === session.userID;

    if (!userOwnsProfile) {
      throw new UnauthorizedException();
    }

    const matchingMedia = await Promise.all(
      input.mediaIDs.map(_ => this.mediaClientService.findOne({ id: _ }))
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
    const matchingProfile = await this.profileClientService.findOne({
      id: session.profileID,
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
