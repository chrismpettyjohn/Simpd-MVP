import {In} from 'typeorm';
import {addTime} from '@simpd/api-lib';
import {JwtService} from '@nestjs/jwt';
import {SessionModel} from './session.model';
import {SessionEntity} from './session.entity';
import {SessionRepository} from './session.repository';
import {DEFAULT_SESSION_LENGTH} from './session.const';
import {GetSession, HasSession, SessionContents} from '@simpd/api-lib';
import {
  SessionCreateInput,
  SessionFilterByManyInput,
  SessionFilterByOneInput,
} from './session.input';
import {
  Args,
  Context,
  GraphQLExecutionContext,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';

@Resolver(() => SessionModel)
export class SessionResolver {
  constructor(
    private readonly jwtService: JwtService,
    private readonly sessionRepo: SessionRepository
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
    @Args('input') input: SessionCreateInput,
    @Context() context: GraphQLExecutionContext
  ): Promise<string> {
    const currentTime = new Date();
    const expiresAt = addTime(currentTime, DEFAULT_SESSION_LENGTH);
    const newSession = await this.sessionRepo.create({
      userID: input.userID,
      expiresAt,
    });

    const sessionContents: SessionContents = {
      userID: newSession.userID,
      profileID: 1, // TODO
      sessionID: newSession.id!,
      expiresAt: +newSession.expiresAt,
    };

    return this.jwtService.sign(sessionContents);
  }

  @Mutation(() => Boolean)
  async sessionDelete(@Args('filter') filter: SessionFilterByOneInput) {
    await this.sessionRepo.delete(filter);
    return true;
  }
}
