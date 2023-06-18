import {In} from 'typeorm';
import {PaymentInvoiceModel} from './payment-invoice.model';
import {PaymentInvoiceRepository} from './payment-invoice.repository';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {
  PaymentInvoiceCreateInput,
  PaymentInvoiceFindManyInput,
  PaymentInvoiceFindOneInput,
} from './payment-invoice.input';
import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';

@Resolver(() => PaymentInvoiceModel)
export class PaymentInvoiceResolver {
  constructor(private readonly paymentInvoiceRepo: PaymentInvoiceRepository) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<PaymentInvoiceModel> {
    return this.paymentInvoice({id: reference.id});
  }

  @Query(() => PaymentInvoiceModel)
  async paymentInvoice(
    @Args('filter') filter: PaymentInvoiceFindOneInput
  ): Promise<PaymentInvoiceModel> {
    return this.paymentInvoiceRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [PaymentInvoiceModel])
  paymentInvoices(
    @Args('filter', {type: () => PaymentInvoiceFindManyInput, nullable: true})
    filter?: PaymentInvoiceFindManyInput
  ): Promise<PaymentInvoiceModel[]> {
    return this.paymentInvoiceRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        userID: filter?.userIDs && In(filter.userIDs),
        profileID: filter?.profileIDs && In(filter.profileIDs),
      },
    });
  }

  @Mutation(() => PaymentInvoiceModel)
  @HasSession()
  async paymentInvoiceCreate(
    @Args('input') input: PaymentInvoiceCreateInput,
    @GetSession() session: SessionContents
  ): Promise<PaymentInvoiceModel> {
    const newPaymentInvoice = await this.paymentInvoiceRepo.create({
      userID: session.userID,
      profileID: session.profileID,
      amount: input.amount,
      description: input.description,
    });
    return newPaymentInvoice;
  }

  @Mutation(() => Boolean)
  async paymentInvoiceDelete(
    @Args('filter') filter: PaymentInvoiceFindOneInput
  ) {
    await this.paymentInvoiceRepo.softDelete(filter);
    return true;
  }
}
