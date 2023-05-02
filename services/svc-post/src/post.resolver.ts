import {In} from 'typeorm';
import {PostEntity} from './post.entity';
import {PostRepository} from './post.repository';
import {GetSession, HasSession} from '@simpd/lib-api';
import {BasePostModel, PostWithTextModel} from './post.model';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {
  PostType,
  PostWire,
  PostWithTextWire,
  SessionWire,
} from '@simpd/lib-client';
import {
  PostFilterByManyInput,
  PostFilterByOneInput,
  PostWithTextCreateInput,
} from './post.input';
import {postEntityToPostWithTextWire} from './post.wire';

@Resolver(() => BasePostModel)
export class PostResolver {
  constructor(
    private readonly postRepo: PostRepository<PostWire>,
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
        userID: filter?.userIDs && In(filter.userIDs),
      },
    });
  }

  @Mutation(() => PostWithTextModel)
  @HasSession()
  async postWithTextCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: PostWithTextCreateInput
  ): Promise<PostWithTextWire> {
    const newTextPost = await this.textPostRepo.create({
      userID: session.userID,
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
