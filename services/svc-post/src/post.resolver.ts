import {In} from 'typeorm';
import {PostModel} from './post.model';
import {SessionWire} from '@simpd/lib-client';
import {PostEntity} from './post.entity';
import {GetSession, HasSession} from '@simpd/lib-api';
import {PostRepository} from './post.repository';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {PostFilterByManyInput, PostFilterByOneInput} from './post.input';

@Resolver(() => PostModel)
export class PostResolver {
  constructor(private readonly postRepo: PostRepository) {}

  @Query(() => PostModel)
  async post(
    @Args('filter') filter: PostFilterByOneInput
  ): Promise<PostEntity> {
    return this.postRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [PostModel])
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

  // @Mutation(() => PostModel)
  // @HasSession()
  // async postCreate(
  //   @GetSession() session: SessionWire,
  //   @Args('input') input: PostCreateInput
  // ): Promise<PostEntity> {
  //   const newPost = await this.postRepo.create({
  //     userID: session.userID,
  //   });
  //   return newPost;
  // }

  @Mutation(() => Boolean)
  async postDelete(@Args('filter') filter: PostFilterByOneInput) {
    await this.postRepo.delete(filter);
    return true;
  }
}
