import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class PaymentMethodBillingAddressModel {
  @Field(() => String, {nullable: true})
  country!: string;

  @Field(() => String, {nullable: true})
  city!: string;

  @Field(() => String, {nullable: true})
  streetAddress1!: string;

  @Field(() => String, {nullable: true})
  streetAddress2!: string;

  @Field(() => String, {nullable: true})
  postalCode!: string;

  @Field(() => String, {nullable: true})
  state!: string;
}

@ObjectType()
export class PaymentMethodCardDetailsModel {
  @Field(() => String, {nullable: true})
  brand!: string;

  @Field(() => String, {nullable: true})
  country!: string;

  @Field(() => Number, {nullable: true})
  exp_month!: number;

  @Field(() => Number, {nullable: true})
  exp_year!: number;

  @Field(() => String, {nullable: true})
  last4!: string;
}

@ObjectType()
export class PaymentMethodModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  userID!: number;

  @Field(() => PaymentMethodBillingAddressModel, {nullable: true})
  billingAddress!: PaymentMethodBillingAddressModel;

  @Field(() => PaymentMethodCardDetailsModel, {nullable: true})
  cardDetails!: PaymentMethodCardDetailsModel;
}

@ObjectType()
export class PaymentMethodMutationResponseModel {
  @Field(() => Boolean, {nullable: true})
  success!: boolean;
}
