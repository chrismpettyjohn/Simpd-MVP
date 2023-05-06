import { In } from 'typeorm';
import { PrivacyModel } from './privacy.model';
import { PrivacyPolicyEntity } from './privacy-policy.entity';
import { HasSession } from '@simpd/lib-api';
import { PrivacyRepository } from './privacy.repository';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  PrivacyCreateInput,
  PrivacyFilterByManyInput,
  PrivacyFilterByOneInput,
} from './privacy.input';

@Resolver(() => PrivacyModel)
export class PrivacyResolver {
  constructor(private readonly privacyRepo: PrivacyRepository) { }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<PrivacyPolicyEntity> {
    return this.privacy({ id: reference.id });
  }

  @Query(() => PrivacyModel)
  async privacy(
    @Args('filter') filter: PrivacyFilterByOneInput
  ): Promise<PrivacyPolicyEntity> {
    return this.privacyRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [PrivacyModel])
  privacys(
    @Args('filter', { type: () => PrivacyFilterByManyInput, nullable: true })
    filter?: PrivacyFilterByManyInput
  ): Promise<PrivacyPolicyEntity[]> {
    return this.privacyRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        resourceID: filter?.resourceIDs && In(filter.resourceIDs),
      },
    });
  }


  @Mutation(() => Boolean)
  async privacyDelete(@Args('filter') filter: PrivacyFilterByOneInput) {
    await this.privacyRepo.delete(filter);
    return true;
  }
}
