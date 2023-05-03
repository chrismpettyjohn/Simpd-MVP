import {In} from 'typeorm';
import {FormModel} from './form.model';
import {FormEntity} from './form.entity';
import {HasSession} from '@simpd/lib-api';
import {FormRepository} from './form.repository';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  FormCreateInput,
  FormFilterByManyInput,
  FormFilterByOneInput,
} from './form.input';

@Resolver(() => FormModel)
export class FormResolver {
  constructor(private readonly formRepo: FormRepository) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<FormEntity> {
    return this.form({id: reference.id});
  }

  @Query(() => FormModel)
  async form(
    @Args('filter') filter: FormFilterByOneInput
  ): Promise<FormEntity> {
    return this.formRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [FormModel])
  forms(
    @Args('filter', {type: () => FormFilterByManyInput, nullable: true})
    filter?: FormFilterByManyInput
  ): Promise<FormEntity[]> {
    return this.formRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
      },
    });
  }

  @Mutation(() => FormModel)
  @HasSession()
  async formCreate(@Args('input') input: FormCreateInput): Promise<FormEntity> {
    const newForm = await this.formRepo.create({});
    return newForm;
  }

  @Mutation(() => Boolean)
  async formDelete(@Args('filter') filter: FormFilterByOneInput) {
    await this.formRepo.delete(filter);
    return true;
  }
}
