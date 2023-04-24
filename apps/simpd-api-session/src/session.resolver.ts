import {In} from 'typeorm';
import {SessionModel} from './session.model';
import {SessionEntity} from './session.entity';
import {SessionRepository} from './session.repository';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {
  SessionCreateInput,
  SessionFilterByManyInput,
  SessionFilterByOneInput,
} from './session.input';
import {addTime} from '@simpd/api-lib';
import {DEFAULT_SESSION_LENGTH} from './session.const';

@Resolver(() => SessionModel)
export class SessionResolver {
  constructor(private readonly sessionRepo: SessionRepository) {}

  @Query(() => SessionModel)
  async session(
    @Args('filter') filter: SessionFilterByOneInput
  ): Promise<SessionEntity> {
    return this.sessionRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [SessionModel])
  sessions(
    @Args('filter', {type: () => SessionFilterByManyInput, nullable: true})
    filter?: SessionFilterByManyInput
  ): Promise<SessionEntity[]> {
    return this.sessionRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
      },
    });
  }

  @Mutation(() => SessionModel)
  async sessionCreate(
    @Args('input') input: SessionCreateInput
  ): Promise<SessionEntity> {
    const currentTime = new Date();
    const expiresAt = addTime(currentTime, DEFAULT_SESSION_LENGTH);
    const newSession = await this.sessionRepo.create({
      userID: input.userID,
      expiresAt,
    });
    return newSession;
  }

  @Mutation(() => Boolean)
  async sessionDelete(@Args('filter') filter: SessionFilterByOneInput) {
    await this.sessionRepo.delete(filter);
    return true;
  }
}
