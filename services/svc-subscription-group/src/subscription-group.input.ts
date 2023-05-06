import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class SubscriptionGroupFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class SubscriptionGroupFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class SubscriptionGroupCreateInput {
  @Field(() => String)
  key!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;
}
