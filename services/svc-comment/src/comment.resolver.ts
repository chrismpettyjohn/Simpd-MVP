import {In} from 'typeorm';
import {CommentModel} from './comment.model';
import {CommentEntity} from './comment.entity';
import {HasSession} from '@simpd/lib-api';
import {CommentRepository} from './comment.repository';
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
  constructor(private readonly commentRepo: CommentRepository) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<CommentEntity> {
    return this.comment({id: reference.id});
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
    @Args('filter', {type: () => CommentFilterByManyInput, nullable: true})
    filter?: CommentFilterByManyInput
  ): Promise<CommentEntity[]> {
    return this.commentRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        key: filter?.keys && In(filter.keys),
      },
    });
  }

  @Mutation(() => CommentModel)
  @HasSession()
  async commentCreate(
    @Args('input') input: CommentCreateInput
  ): Promise<CommentEntity> {
    const newComment = await this.commentRepo.create({
      key: input.key,
      name: input.name,
      description: input.description,
    });
    return newComment;
  }

  @Mutation(() => Boolean)
  async commentDelete(@Args('filter') filter: CommentFilterByOneInput) {
    await this.commentRepo.delete(filter);
    return true;
  }
}
