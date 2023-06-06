import {In} from 'typeorm';
import {Resolver, Query, Mutation} from '@nestjs/graphql';
import {PaymentMethodRepository} from './payment-method.repository';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {paymentMethodEntityToPaymentMethodModel} from './payment-method.wire';
import {
  PaymentMethodFindManyInput,
  PaymentMethodFindOneInput,
} from './payment-method.input';
import {
  PaymentMethodModel,
  PaymentMethodMutationResponseModel,
} from './payment-method.model';

@Resolver(() => PaymentMethodModel)
export class PaymentMethodResolver {
  constructor(private readonly paymentMethodRepo: PaymentMethodRepository) {}

  @Query(() => PaymentMethodModel)
  @HasSession()
  async paymentMethod(
    filter: PaymentMethodFindOneInput,
    @GetSession() session: SessionContents
  ): Promise<PaymentMethodModel> {
    const matchingPaymentMethod = await this.paymentMethodRepo.findOneOrFail({
      where: {
        ...filter,
        userID: session.userID,
      },
    });
    return paymentMethodEntityToPaymentMethodModel(matchingPaymentMethod);
  }

  @Query(() => [PaymentMethodModel])
  @HasSession()
  async paymentMethods(
    filter: PaymentMethodFindManyInput,
    @GetSession() session: SessionContents
  ): Promise<PaymentMethodModel[]> {
    const matchingPaymentMethods = await this.paymentMethodRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        userID: session.userID,
      },
    });
    return matchingPaymentMethods.map(paymentMethodEntityToPaymentMethodModel);
  }

  @Mutation(() => PaymentMethodMutationResponseModel)
  @HasSession()
  async paymentMethodDeleteOne(
    filter: PaymentMethodFindOneInput,
    @GetSession() session: SessionContents
  ): Promise<PaymentMethodMutationResponseModel> {
    await this.paymentMethodRepo.softDelete({
      ...filter,
      userID: session.userID,
    });
    return {
      success: true,
    };
  }
}
