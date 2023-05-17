import { In } from 'typeorm';
import { SessionModel } from './session.model';
import { SessionEntity } from './session.entity';
import { SessionService } from './session.service';
import { SessionRepository } from './session.repository';
import { GetSession, HasSession, SessionContents } from '@simpd/lib-api';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  SessionChangeProfileInput,
  SessionCreateInput,
  SessionFilterByManyInput,
  SessionFilterByOneInput,
} from './session.input';

@Resolver(() => SessionModel)
export class SessionResolver {
  constructor(
    private readonly sessionRepo: SessionRepository,
    private readonly sessionService: SessionService
  ) { }

  // TODO: Add privacy guard
  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<SessionEntity> {
    return this.session({ id: reference.id });
  }

  @Query(() => SessionModel, { nullable: true })
  @HasSession()
  async me(@GetSession() session: SessionContents): Promise<SessionEntity> {
    console.log(session)
    return this.sessionRepo.findOneOrFail({
      where: {
        id: session.sessionID,
      },
    });
  }

  @Mutation(() => String, { nullable: true })
  @HasSession()
  async sessionChangeProfile(
    @GetSession() session: SessionContents,
    @Args('input') input: SessionChangeProfileInput
  ): Promise<string> {
    const newSession = await this.sessionService.changeSessionProfile(
      session,
      input
    );
    const sessionJWT = this.sessionService.generateBearerToken(newSession);
    return sessionJWT;
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
    @Args('filter', { type: () => SessionFilterByManyInput, nullable: true })
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
      input.email,
      input.password,
      input.profileID
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
