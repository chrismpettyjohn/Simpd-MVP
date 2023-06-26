import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class ProfileSubscriptionGroupMembershipFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  subscriptionGroupIDs?: number[];
}

@InputType()
export class ProfileSubscriptionGroupMembershipFilterByOneInput {
  @Field(() => Number, {nullable: true})
  subscriptionGroupID?: number;
}
