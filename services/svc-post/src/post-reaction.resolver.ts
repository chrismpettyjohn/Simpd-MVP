import {SessionWire} from '@simpd/lib-client';
import {GetSession, HasSession} from '@simpd/lib-api';
import {PostReactionModel} from './post-reaction.model';
import {PostReactionInput} from './post-reaction.input';
import {PostReactionService} from './post-reaction.service';
import {reactionWireToPostReactionWire} from './post-reaction.wire';
import {PostUnion, PostWithTextModel} from './post.model';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {PostFilterByManyInput, PostFilterByOneInput} from './post.input';

@Resolver(() => PostReactionModel)
export class PostReactionResolver {
  constructor(private readonly postReactionService: PostReactionService) {}

  @Query(() => PostUnion)
  @HasSession()
  async postReaction(
    @Args('filter') filter: PostFilterByOneInput
  ): Promise<PostReactionModel> {
    const matchingReaction = await this.postReactionService.findOne(filter);
    return reactionWireToPostReactionWire(matchingReaction);
  }

  @Query(() => [PostUnion])
  @HasSession()
  async postReactions(
    @Args('filter', {type: () => PostFilterByManyInput})
    filter: PostFilterByManyInput
  ): Promise<PostReactionModel[]> {
    const matchingReactions = await this.postReactionService.findMany(filter);
    return matchingReactions.map(reactionWireToPostReactionWire);
  }

  @Mutation(() => PostWithTextModel)
  @HasSession()
  async postReactionCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: PostReactionInput
  ): Promise<PostReactionModel> {
    const newReaction = await this.postReactionService.createOne({
      profileID: session.profileID,
      resourceID: input.postID,
      reaction: input.reaction,
    });
    return reactionWireToPostReactionWire(newReaction);
  }

  @Mutation(() => Boolean)
  async postReactionDelete(@Args('filter') filter: PostFilterByOneInput) {
    return this.postReactionService.deleteOne(filter);
  }
}
