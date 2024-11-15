import {In} from 'typeorm';
import {TipModel} from './tip.model';
import {TipEntity} from './tip.entity';
import {TipService} from './tip.service';
import {TipRepository} from './tip.repository';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  TipCreateInput,
  TipFilterByManyInput,
  TipFilterByOneInput,
} from './tip.input';

@Resolver(() => TipModel)
export class TipResolver {
  constructor(
    private readonly tipRepo: TipRepository,
    private readonly tipService: TipService
  ) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<TipEntity> {
    return this.tip({id: reference.id});
  }

  @Query(() => TipModel)
  async tip(@Args('filter') filter: TipFilterByOneInput): Promise<TipEntity> {
    return this.tipRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [TipModel])
  tips(
    @Args('filter', {type: () => TipFilterByManyInput, nullable: true})
    filter?: TipFilterByManyInput
  ): Promise<TipEntity[]> {
    return this.tipRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        userID: filter?.userIDs && In(filter.userIDs),
        profileID: filter?.profileIDs && In(filter.profileIDs),
        receivingUserID:
          filter?.receivingUserIDs && In(filter.receivingUserIDs),
        receivingProfileID:
          filter?.receivingProfileIDs && In(filter.receivingProfileIDs),
        paymentInvoiceID:
          filter?.paymentInvoiceIDs && In(filter.paymentInvoiceIDs),
      },
    });
  }

  @Mutation(() => TipModel)
  @HasSession()
  async tipCreate(
    @Args('input') input: TipCreateInput,
    @GetSession() session: SessionContents
  ): Promise<TipEntity> {
    const newTip = await this.tipService.createOne(input, session.profileID);
    return newTip;
  }

  @Mutation(() => Boolean)
  async tipDelete(@Args('filter') filter: TipFilterByOneInput) {
    await this.tipRepo.softDelete(filter);
    return true;
  }
}
