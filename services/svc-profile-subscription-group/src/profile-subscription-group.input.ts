import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class ProfileSubscriptionGroupFilterByManyInput {
  @Field(() => [Number])
  profileIDs!: number[];
}

@InputType()
export class ProfileSubscriptionGroupFilterByOneInput {
  @Field(() => Number)
  profileID!: number;
}

@InputType()
export class ProfileSubscriptionGroupCreateInput {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;

  @Field(() => String)
  monthlyCostInDollarsAndCents!: string;
}
