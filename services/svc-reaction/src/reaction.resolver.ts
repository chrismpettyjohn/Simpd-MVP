import {In} from 'typeorm';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {ReactionModel} from './reaction.model';
import {ReactionEntity} from './reaction.entity';
import {UnauthorizedException} from '@nestjs/common';
import {ProfileClientService} from '@simpd/lib-client';
import {ReactionRepository} from './reaction.repository';
import {
  ReactionCreateInput,
  ReactionFilterByManyInput,
  ReactionFilterByOneInput,
} from './reaction.input';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';

@Resolver(() => ReactionModel)
export class ReactionResolver {
  constructor(
    private readonly reactionRepo: ReactionRepository,
    private readonly profileClientService: ProfileClientService
  ) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<ReactionEntity> {
    return this.reaction({id: reference.id});
  }

  @Query(() => ReactionModel)
  async reaction(
    @Args('filter') filter: ReactionFilterByOneInput
  ): Promise<ReactionEntity> {
    return this.reactionRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [ReactionModel])
  reactions(
    @Args('filter', {type: () => ReactionFilterByManyInput, nullable: true})
    filter?: ReactionFilterByManyInput
  ): Promise<ReactionEntity[]> {
    return this.reactionRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        serviceKey: filter?.serviceKey,
        resourceID: filter?.resourceIDs && In(filter?.resourceIDs),
      },
    });
  }

  @Mutation(() => ReactionModel)
  @HasSession()
  async reactionCreate(
    @GetSession() session: SessionContents,
    @Args('input') input: ReactionCreateInput
  ): Promise<ReactionEntity> {
    const matchingProfile = await this.profileClientService.findOneByID({
      id: input.profileID,
    });

    const userOwnsProfile = matchingProfile.userID === session.userID;

    if (!userOwnsProfile) {
      throw new UnauthorizedException();
    }
    const newReaction = await this.reactionRepo.create({
      serviceKey: input.serviceKey,
      resourceID: input.resourceID,
      profileID: input.profileID,
      reaction: input.reaction,
    });
    return newReaction;
  }

  @Mutation(() => Boolean)
  async reactionDelete(@Args('filter') filter: ReactionFilterByOneInput) {
    await this.reactionRepo.delete(filter);
    return true;
  }
}
