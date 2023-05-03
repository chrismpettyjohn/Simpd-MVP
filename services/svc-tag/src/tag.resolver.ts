import {In} from 'typeorm';
import {TagModel} from './tag.model';
import {TagEntity} from './tag.entity';
import {HasSession} from '@simpd/lib-api';
import {TagRepository} from './tag.repository';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  TagCreateInput,
  TagFilterByManyInput,
  TagFilterByOneInput,
} from './tag.input';

@Resolver(() => TagModel)
export class TagResolver {
  constructor(private readonly tagRepo: TagRepository) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<TagEntity> {
    return this.tag({id: reference.id});
  }

  @Query(() => TagModel)
  async tag(@Args('filter') filter: TagFilterByOneInput): Promise<TagEntity> {
    return this.tagRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [TagModel])
  tags(
    @Args('filter', {type: () => TagFilterByManyInput, nullable: true})
    filter?: TagFilterByManyInput
  ): Promise<TagEntity[]> {
    return this.tagRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        key: filter?.keys && In(filter.keys),
      },
    });
  }

  @Mutation(() => TagModel)
  @HasSession()
  async tagCreate(@Args('input') input: TagCreateInput): Promise<TagEntity> {
    const newTag = await this.tagRepo.create({
      key: input.key,
      name: input.name,
      description: input.description,
    });
    return newTag;
  }

  @Mutation(() => Boolean)
  async tagDelete(@Args('filter') filter: TagFilterByOneInput) {
    await this.tagRepo.delete(filter);
    return true;
  }
}
