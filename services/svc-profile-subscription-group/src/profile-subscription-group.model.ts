import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class ProfileSubscriptionGroupModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;

  @Field(() => Number, {nullable: true})
  subscriptionGroupID?: number;
}
