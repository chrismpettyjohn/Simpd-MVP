import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class PaymentInvoiceFindOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  userID?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;
}
@InputType()
export class PaymentInvoiceFindManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];

  @Field(() => [Number], {nullable: true})
  profileIDs?: number[];
}

@InputType()
export class PaymentInvoiceCreateInput {
  @Field(() => String)
  amountInDollarsAndCents!: string;

  @Field(() => String)
  description!: string;
}
