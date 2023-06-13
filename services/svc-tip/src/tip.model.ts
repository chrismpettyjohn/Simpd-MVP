import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class TipModel {
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

  @Field(() => Number, {nullable: true})
  amount?: number;

  @Field(() => String, {nullable: true})
  message?: string;
}
