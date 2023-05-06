import { In } from 'typeorm';
import { CommentModel } from './comment.model';
import { CommentEntity } from './comment.entity';
import { UnauthorizedException } from '@nestjs/common';
import { ProfileClientService } from '@simpd/lib-client';
import { CommentRepository } from './comment.repository';
import { GetSession, HasSession, SessionContents } from '@simpd/lib-api';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  CommentCreateInput,
  CommentFilterByManyInput,
  CommentFilterByOneInput,
} from './comment.input';

@Resolver(() => CommentModel)
export class CommentResolver {
  constructor(
    private readonly commentRepo: CommentRepository,
    private readonly profileClientService: ProfileClientService
  ) { }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<CommentEntity> {
    return this.comment({ id: reference.id });
  }

  @Query(() => CommentModel)
  async comment(
    @Args('filter') filter: CommentFilterByOneInput
  ): Promise<CommentEntity> {
    return this.commentRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [CommentModel])
  comments(
    @Args('filter', { type: () => CommentFilterByManyInput, nullable: true })
    filter?: CommentFilterByManyInput
  ): Promise<CommentEntity[]> {
    return this.commentRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        serviceKey: filter?.serviceKey,
        resourceID: filter?.resourceIDs && In(filter.resourceIDs),
      },
    });
  }

  @Mutation(() => CommentModel)
  @HasSession()
  async commentCreate(
    @GetSession() session: SessionContents,
    @Args('input') input: CommentCreateInput
  ): Promise<CommentEntity> {
    const matchingProfile = await this.profileClientService.findOne({
      id: input.profileID,
    });

    const userOwnsProfile = matchingProfile.userID === session.userID;

    if (!userOwnsProfile) {
      throw new UnauthorizedException();
    }

    const newComment = await this.commentRepo.create({
      serviceKey: input.serviceKey,
      resourceID: input.resourceID,
      comment: input.comment,
      profileID: input.profileID,
    });
    return newComment;
  }

  @Mutation(() => Boolean)
  async commentDelete(@Args('filter') filter: CommentFilterByOneInput) {
    await this.commentRepo.delete(filter);
    return true;
  }
}
