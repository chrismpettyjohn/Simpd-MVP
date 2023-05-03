import { In } from 'typeorm';
import { ReportModel } from './report.model';
import { ReportEntity } from './report.entity';
import { HasSession } from '@simpd/lib-api';
import { ReportRepository } from './report.repository';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  ReportCreateInput,
  ReportFilterByManyInput,
  ReportFilterByOneInput,
} from './report.input';

@Resolver(() => ReportModel)
export class ReportResolver {
  constructor(private readonly reportRepo: ReportRepository) { }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<ReportEntity> {
    return this.report({ id: reference.id });
  }

  @Query(() => ReportModel)
  async report(@Args('filter') filter: ReportFilterByOneInput): Promise<ReportEntity> {
    return this.reportRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [ReportModel])
  reports(
    @Args('filter', { type: () => ReportFilterByManyInput, nullable: true })
    filter?: ReportFilterByManyInput
  ): Promise<ReportEntity[]> {
    return this.reportRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        key: filter?.keys && In(filter.keys),
      },
    });
  }

  @Mutation(() => ReportModel)
  @HasSession()
  async reportCreate(@Args('input') input: ReportCreateInput): Promise<ReportEntity> {
    const newReport = await this.reportRepo.create({
      key: input.key,
      name: input.name,
      description: input.description,
    });
    return newReport;
  }

  @Mutation(() => Boolean)
  async reportDelete(@Args('filter') filter: ReportFilterByOneInput) {
    await this.reportRepo.delete(filter);
    return true;
  }
}
