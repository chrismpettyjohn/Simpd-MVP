import {ObjectType, Directive, Field} from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class PaymentInvoiceModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  userID?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;

  @Field(() => Number, {nullable: true})
  amountInCents?: number;

  @Field(() => String, {nullable: true})
  amountInDollarsAndCents?: string;

  @Field(() => String, {nullable: true})
  description?: string;
}
