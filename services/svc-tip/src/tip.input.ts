import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class TipFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  userID?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;

  @Field(() => Number, {nullable: true})
  receivingUserID?: number;

  @Field(() => Number, {nullable: true})
  receivingProfileID?: number;

  @Field(() => Number, {nullable: true})
  paymentInvoiceID?: number;
}

@InputType()
export class TipFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];

  @Field(() => [Number], {nullable: true})
  profileIDs?: number[];

  @Field(() => [Number], {nullable: true})
  receivingUserIDs?: number[];

  @Field(() => [Number], {nullable: true})
  receivingProfileIDs?: number[];

  @Field(() => [Number], {nullable: true})
  paymentInvoiceIDs?: number[];
}

@InputType()
export class TipCreateInput {
  @Field(() => Number)
  receivingUserID!: number;

  @Field(() => Number)
  receivingProfileID!: number;

  @Field(() => Number)
  amount!: number;

  @Field(() => String)
  message!: string;
}
