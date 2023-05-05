import {In} from 'typeorm';
import {MessageModel} from './message.model';
import {MessageEntity} from './message.entity';
import {HasSession} from '@simpd/lib-api';
import {MessageRepository} from './message.repository';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  MessageCreateInput,
  MessageFilterByManyInput,
  MessageFilterByOneInput,
} from './message.input';

@Resolver(() => MessageModel)
export class MessageResolver {
  constructor(private readonly messageRepo: MessageRepository) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<MessageEntity> {
    return this.message({id: reference.id});
  }

  @Query(() => MessageModel)
  async message(
    @Args('filter') filter: MessageFilterByOneInput
  ): Promise<MessageEntity> {
    return this.messageRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [MessageModel])
  messages(
    @Args('filter', {type: () => MessageFilterByManyInput, nullable: true})
    filter?: MessageFilterByManyInput
  ): Promise<MessageEntity[]> {
    return this.messageRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
      },
    });
  }

  @Mutation(() => MessageModel)
  @HasSession()
  async messageCreate(
    @Args('input') input: MessageCreateInput
  ): Promise<MessageEntity> {
    const newMessage = await this.messageRepo.create({});
    return newMessage;
  }

  @Mutation(() => Boolean)
  async messageDelete(@Args('filter') filter: MessageFilterByOneInput) {
    await this.messageRepo.delete(filter);
    return true;
  }
}