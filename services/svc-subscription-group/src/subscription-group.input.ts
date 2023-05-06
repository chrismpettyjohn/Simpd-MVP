import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class SubscriptionGroupFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [String], {nullable: true})
  profileIDs!: string[];
}

@InputType()
export class SubscriptionGroupFilterByOneInput {
  @Field(() => Number)
  id!: number;

  @Field(() => Number)
  profileID!: number;
}

@InputType()
export class SubscriptionGroupCreateInput {
  @Field(() => Number)
  profileID!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;
}
