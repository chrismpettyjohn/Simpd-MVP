import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class SubscriptionGroupFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;
}

@InputType()
export class SubscriptionGroupFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];
}
