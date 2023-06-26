import {
  Directive,
  Field,
  GraphQLISODateTime,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class ProfileSubscriptionGroupMembershipModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  profileID!: number;

  @Field(() => Number, {nullable: true})
  subscriptionGroupID!: number;

  @Field(() => Boolean, {nullable: true})
  autoRenew!: boolean;

  @Field(() => GraphQLISODateTime, {nullable: true})
  renewsOn!: Date;
}
