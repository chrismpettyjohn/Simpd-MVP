import {In} from 'typeorm';
import {MessageModel} from './message.model';
import {MessageEntity} from './message.entity';
import {MessageRepository} from './message.repository';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
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
    @GetSession() session: SessionContents,
    @Args('input') input: MessageCreateInput
  ): Promise<MessageEntity> {
    const newMessage = await this.messageRepo.create({
      sendingProfileID: session.profileID,
      receivingProfileID: input.receivingProfileID,
      content: input.content,
    });
    return newMessage;
  }

  @Mutation(() => Boolean)
  async messageDelete(@Args('filter') filter: MessageFilterByOneInput) {
    await this.messageRepo.softDelete(filter);
    return true;
  }
}
