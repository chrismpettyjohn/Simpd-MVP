import {In} from 'typeorm';
import {ReactionModel} from './reaction.model';
import {ReactionEntity} from './reaction.entity';
import {HasSession} from '@simpd/lib-api';
import {ReactionRepository} from './reaction.repository';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  ReactionCreateInput,
  ReactionFilterByManyInput,
  ReactionFilterByOneInput,
} from './reaction.input';

@Resolver(() => ReactionModel)
export class ReactionResolver {
  constructor(private readonly reactionRepo: ReactionRepository) {}

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
        key: filter?.keys && In(filter.keys),
      },
    });
  }

  @Mutation(() => ReactionModel)
  @HasSession()
  async reactionCreate(
    @Args('input') input: ReactionCreateInput
  ): Promise<ReactionEntity> {
    const newReaction = await this.reactionRepo.create({
      key: input.key,
      name: input.name,
      description: input.description,
    });
    return newReaction;
  }

  @Mutation(() => Boolean)
  async reactionDelete(@Args('filter') filter: ReactionFilterByOneInput) {
    await this.reactionRepo.delete(filter);
    return true;
  }
}
