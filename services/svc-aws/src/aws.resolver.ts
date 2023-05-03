import { In } from 'typeorm';
import { AWSModel } from './aws.model';
import { SessionWire } from '@simpd/lib-client';
import { AWSEntity } from './aws.entity';
import { GetSession, HasSession } from '@simpd/lib-api';
import { AWSRepository } from './aws.repository';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  AWSCreateInput,
  AWSFilterByManyInput,
  AWSFilterByOneInput,
} from './aws.input';

@Resolver(() => AWSModel)
export class AWSResolver {
  constructor(private readonly awsRepo: AWSRepository) { }

  // TODO: Add Privacy Guard
  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<AWSEntity> {
    return this.aws({ id: reference.id });
  }

  @Query(() => AWSModel)
  async aws(
    @Args('filter') filter: AWSFilterByOneInput
  ): Promise<AWSEntity> {
    return this.awsRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [AWSModel])
  awss(
    @Args('filter', { type: () => AWSFilterByManyInput, nullable: true })
    filter?: AWSFilterByManyInput
  ): Promise<AWSEntity[]> {
    return this.awsRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        userID: filter?.userIDs && In(filter.userIDs),
        username: filter?.usernames && In(filter.usernames),
      },
    });
  }

  @Mutation(() => AWSModel)
  @HasSession()
  async awsCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: AWSCreateInput
  ): Promise<AWSEntity> {
    const newAWS = await this.awsRepo.create({
      userID: session.userID,
      username: input.username,
    });
    return newAWS;
  }

  @Mutation(() => Boolean)
  async awsDelete(@Args('filter') filter: AWSFilterByOneInput) {
    await this.awsRepo.delete(filter);
    return true;
  }
}
