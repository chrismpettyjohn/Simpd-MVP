import {In} from 'typeorm';
import {PostEntity} from './post.entity';
import {PostRepository} from './post.repository';
import {BadRequestException, UnauthorizedException} from '@nestjs/common';
import {GetSession, HasSession} from '@simpd/lib-api';
import {postEntityToPostWithTextWire} from './post.wire';
import {BasePostModel, PostWithTextModel} from './post.model';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {
  PostType,
  PostWire,
  PostWithTextWire,
  ProfileClientService,
  SessionWire,
} from '@simpd/lib-client';
import {
  PostFilterByManyInput,
  PostFilterByOneInput,
  PostWithTextCreateInput,
} from './post.input';

@Resolver(() => BasePostModel)
export class PostResolver {
  constructor(
    private readonly postRepo: PostRepository<PostWire>,
    private readonly profileClientService: ProfileClientService,
    private readonly textPostRepo: PostRepository<PostWithTextWire>
  ) {}

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

  @Mutation(() => Boolean)
  async postDelete(@Args('filter') filter: PostFilterByOneInput) {
    await this.postRepo.delete(filter);
    return true;
  }
}
