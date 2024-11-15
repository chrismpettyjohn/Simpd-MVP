import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class SubscriptionGroupModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => String, {nullable: true})
  serviceKey!: string;

  @Field(() => Number, {nullable: true})
  resourceID!: number;

  @Field(() => String, {nullable: true})
  name!: string;

  @Field(() => String, {nullable: true})
  description!: string;

  @Field(() => Number, {nullable: true})
  monthlyCostInCents!: number;

  @Field(() => String, {nullable: true})
  monthlyCostInDollarsAndCents!: string;
}
