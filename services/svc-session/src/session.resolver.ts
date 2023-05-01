import {In} from 'typeorm';
import {SessionModel} from './session.model';
import {SessionEntity} from './session.entity';
import {SessionService} from './session.service';
import {SessionRepository} from './session.repository';
import {GetSession, HasSession, SessionContents} from '@simpd/api-lib';
import {
  SessionCreateInput,
  SessionFilterByManyInput,
  SessionFilterByOneInput,
} from './session.input';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';

@Resolver(() => SessionModel)
export class SessionResolver {
  constructor(
    private readonly sessionRepo: SessionRepository,
    private readonly sessionService: SessionService
  ) {}

  @Query(() => SessionModel, {nullable: true})
  @HasSession()
  async me(@GetSession() session: SessionContents): Promise<SessionEntity> {
    return this.sessionRepo.findOneOrFail({
      where: {
        id: session.sessionID,
      },
    });
  }

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

  @Mutation(() => String)
  async sessionCreate(
    @Args('input') input: SessionCreateInput
  ): Promise<string> {
    const userSession = await this.sessionService.createNewSession(
      input.userID
    );
    const sessionJWT = this.sessionService.generateBearerToken(userSession);
    return sessionJWT;
  }

  @Mutation(() => Boolean)
  async sessionDelete(@Args('filter') filter: SessionFilterByOneInput) {
    await this.sessionRepo.delete(filter);
    return true;
  }
}
