import {SessionWire} from '@simpd/lib-client';
import {GetSession, HasSession} from '@simpd/lib-api';
import {MessageReactionModel} from './message-reaction.model';
import {MessageReactionService} from './message-reaction.service';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {messageReactionWireToMessageReactionWire} from './message-reaction.wire';
import {
  MessageReactionFilterManyInput,
  MessageReactionFilterOneInput,
  MessageReactionCreateInput,
} from './message-reaction.input';

@Resolver(() => MessageReactionModel)
export class MessageReactionResolver {
  constructor(
    private readonly messageReactionService: MessageReactionService
  ) {}

  @Query(() => MessageReactionModel)
  @HasSession()
  async messageReaction(
    @Args('filter', {type: () => MessageReactionFilterOneInput})
    filter: MessageReactionFilterOneInput
  ): Promise<MessageReactionModel> {
    const matchingReaction = await this.messageReactionService.findOne({
      resourceID: filter.messageID,
      profileID: filter.profileID,
    });
    return messageReactionWireToMessageReactionWire(matchingReaction);
  }

  @Query(() => [MessageReactionModel])
  @HasSession()
  async messageReactions(
    @Args('filter', {type: () => MessageReactionFilterManyInput})
    filter: MessageReactionFilterManyInput
  ): Promise<MessageReactionModel[]> {
    const matchingReactions = await this.messageReactionService.findMany({
      resourceIDs: filter.messageIDs,
      profileIDs: filter.profileIDs,
    });
    return matchingReactions.map(messageReactionWireToMessageReactionWire);
  }

  @Mutation(() => MessageReactionModel)
  @HasSession()
  async messageReactionCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: MessageReactionCreateInput
  ): Promise<MessageReactionModel> {
    const newReaction = await this.messageReactionService.createOne({
      profileID: session.profileID,
      resourceID: input.messageID,
      reaction: input.reaction,
    });
    return messageReactionWireToMessageReactionWire(newReaction);
  }

  @Mutation(() => Boolean)
  @HasSession()
  async messageReactionDelete(
    @GetSession() session: SessionWire,
    @Args('filter', {type: () => MessageReactionFilterOneInput})
    filter: MessageReactionFilterOneInput
  ) {
    await this.messageReactionService.deleteOne({
      resourceID: filter.messageID,
      profileID: session.profileID,
    });
    return true;
  }
}
