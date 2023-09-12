import {In} from 'typeorm';
import {MessageModel} from './message.model';
import {MessageEntity} from './message.entity';
import {ProfileModel} from '@simpd/lib-client';
import {MessageService} from './message.service';
import {MessageRepository} from './message.repository';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {
  MessageCreateInput,
  MessageFilterByManyInput,
  MessageFilterByOneInput,
} from './message.input';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';

@Resolver(() => MessageModel)
export class MessageResolver {
  constructor(
    private readonly messageRepo: MessageRepository,
    private readonly messageService: MessageService
  ) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<MessageEntity> {
    return this.message({id: reference.id});
  }

  @ResolveField(() => ProfileModel)
  sendingProfile(@Parent() message: MessageModel): ProfileModel {
    return {
      id: message.sendingProfileID!,
    };
  }

  @ResolveField(() => ProfileModel)
  receivingProfile(@Parent() message: MessageModel): ProfileModel {
    return {
      id: message.receivingProfileID!,
    };
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
    @Args('filter')
    filter: MessageFilterByManyInput
  ): Promise<MessageEntity[]> {
    return this.messageRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        receivingProfileID: filter.receivingProfileID,
      },
    });
  }

  @Mutation(() => MessageModel)
  @HasSession()
  async messageCreate(
    @GetSession() session: SessionContents,
    @Args('input') input: MessageCreateInput
  ): Promise<MessageEntity> {
    const newMessage = await this.messageService.create({
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
