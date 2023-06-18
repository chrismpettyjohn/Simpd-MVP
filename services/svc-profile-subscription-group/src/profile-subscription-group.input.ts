import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class ProfileSubscriptionGroupFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [String], {nullable: true})
  profileIDs!: string[];
}

@InputType()
export class ProfileSubscriptionGroupFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;
}

@InputType()
export class ProfileSubscriptionGroupCreateInput {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;

  @Field(() => Number)
  monthlyCost!: number;
}
