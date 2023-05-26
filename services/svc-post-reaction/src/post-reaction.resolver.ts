import {SessionWire} from '@simpd/lib-client';
import {GetSession, HasSession} from '@simpd/lib-api';
import {PostReactionModel} from './post-reaction.model';
import {PostReactionService} from './post-reaction.service';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {postReactionWireToPostReactionWire} from './post-reaction.wire';
import {
  PostReactionFilterManyInput,
  PostReactionFilterOneInput,
  PostReactionCreateInput,
} from './post-reaction.input';

@Resolver(() => PostReactionModel)
export class PostReactionResolver {
  constructor(private readonly postReactionService: PostReactionService) {}

  @Query(() => PostReactionModel)
  @HasSession()
  async postReaction(
    @Args('filter', {type: () => PostReactionFilterOneInput})
    filter: PostReactionFilterOneInput
  ): Promise<PostReactionModel> {
    const matchingReaction = await this.postReactionService.findOne({
      resourceID: filter.postID,
      profileID: filter.profileID,
    });
    return postReactionWireToPostReactionWire(matchingReaction);
  }

  @Query(() => [PostReactionModel])
  @HasSession()
  async postReactions(
    @Args('filter', {type: () => PostReactionFilterManyInput})
    filter: PostReactionFilterManyInput
  ): Promise<PostReactionModel[]> {
    const matchingReactions = await this.postReactionService.findMany({
      resourceIDs: filter.postIDs,
      profileIDs: filter.profileIDs,
    });
    return matchingReactions.map(postReactionWireToPostReactionWire);
  }

  @Mutation(() => PostReactionModel)
  @HasSession()
  async postReactionCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: PostReactionCreateInput
  ): Promise<PostReactionModel> {
    const newReaction = await this.postReactionService.createOne({
      profileID: session.profileID,
      resourceID: input.postID,
      reaction: input.reaction,
    });
    return postReactionWireToPostReactionWire(newReaction);
  }

  @Mutation(() => Boolean)
  @HasSession()
  async postReactionDelete(
    @GetSession() session: SessionWire,
    @Args('filter', {type: () => PostReactionFilterOneInput})
    filter: PostReactionFilterOneInput
  ) {
    await this.postReactionService.deleteOne({
      resourceID: filter.postID,
      profileID: session.profileID,
    });
    return true;
  }
}
