import {SessionWire} from '@simpd/lib-client';
import {GetSession, HasSession} from '@simpd/lib-api';
import {CommentReactionModel} from './comment-reaction.model';
import {CommentReactionService} from './comment-reaction.service';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {commentReactionWireToCommentReactionWire} from './comment-reaction.wire';
import {
  CommentReactionFilterManyInput,
  CommentReactionFilterOneInput,
  CommentReactionCreateInput,
} from './comment-reaction.input';

@Resolver(() => CommentReactionModel)
export class CommentReactionResolver {
  constructor(
    private readonly commentReactionService: CommentReactionService
  ) {}

  @Query(() => CommentReactionModel)
  @HasSession()
  async commentReaction(
    @Args('filter', {type: () => CommentReactionFilterOneInput})
    filter: CommentReactionFilterOneInput
  ): Promise<CommentReactionModel> {
    const matchingReaction = await this.commentReactionService.findOne({
      resourceID: filter.commentID,
      profileID: filter.profileID,
    });
    return commentReactionWireToCommentReactionWire(matchingReaction);
  }

  @Query(() => [CommentReactionModel])
  @HasSession()
  async commentReactions(
    @Args('filter', {type: () => CommentReactionFilterManyInput})
    filter: CommentReactionFilterManyInput
  ): Promise<CommentReactionModel[]> {
    const matchingReactions = await this.commentReactionService.findMany({
      resourceIDs: filter.commentIDs,
      profileIDs: filter.profileIDs,
    });
    return matchingReactions.map(commentReactionWireToCommentReactionWire);
  }

  @Mutation(() => CommentReactionModel)
  @HasSession()
  async commentReactionCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: CommentReactionCreateInput
  ): Promise<CommentReactionModel> {
    const newReaction = await this.commentReactionService.createOne({
      profileID: session.profileID,
      resourceID: input.commentID,
      reaction: input.reaction,
    });
    return commentReactionWireToCommentReactionWire(newReaction);
  }

  @Mutation(() => Boolean)
  @HasSession()
  async commentReactionDelete(
    @GetSession() session: SessionWire,
    @Args('filter', {type: () => CommentReactionFilterOneInput})
    filter: CommentReactionFilterOneInput
  ) {
    await this.commentReactionService.deleteOne({
      resourceID: filter.commentID,
      profileID: session.profileID,
    });
    return true;
  }
}
