import {SessionWire} from '@simpd/lib-client';
import {GetSession, HasSession} from '@simpd/lib-api';
import {ChatReactionModel} from './chat-reaction.model';
import {ChatReactionService} from './chat-reaction.service';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {chatReactionWireToChatReactionWire} from './chat-reaction.wire';
import {
  ChatReactionFilterManyInput,
  ChatReactionFilterOneInput,
  ChatReactionCreateInput,
} from './chat-reaction.input';

@Resolver(() => ChatReactionModel)
export class ChatReactionResolver {
  constructor(private readonly chatReactionService: ChatReactionService) {}

  @Query(() => ChatReactionModel)
  @HasSession()
  async chatReaction(
    @Args('filter', {type: () => ChatReactionFilterOneInput})
    filter: ChatReactionFilterOneInput
  ): Promise<ChatReactionModel> {
    const matchingReaction = await this.chatReactionService.findOne({
      resourceID: filter.chatID,
      profileID: filter.profileID,
    });
    return chatReactionWireToChatReactionWire(matchingReaction);
  }

  @Query(() => [ChatReactionModel])
  @HasSession()
  async chatReactions(
    @Args('filter', {type: () => ChatReactionFilterManyInput})
    filter: ChatReactionFilterManyInput
  ): Promise<ChatReactionModel[]> {
    const matchingReactions = await this.chatReactionService.findMany({
      resourceIDs: filter.chatIDs,
      profileIDs: filter.profileIDs,
    });
    return matchingReactions.map(chatReactionWireToChatReactionWire);
  }

  @Mutation(() => ChatReactionModel)
  @HasSession()
  async chatReactionCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: ChatReactionCreateInput
  ): Promise<ChatReactionModel> {
    const newReaction = await this.chatReactionService.createOne({
      profileID: session.profileID,
      resourceID: input.chatID,
      reaction: input.reaction,
    });
    return chatReactionWireToChatReactionWire(newReaction);
  }

  @Mutation(() => Boolean)
  @HasSession()
  async chatReactionDelete(
    @GetSession() session: SessionWire,
    @Args('filter', {type: () => ChatReactionFilterOneInput})
    filter: ChatReactionFilterOneInput
  ) {
    await this.chatReactionService.deleteOne({
      resourceID: filter.chatID,
      profileID: session.profileID,
    });
    return true;
  }
}
